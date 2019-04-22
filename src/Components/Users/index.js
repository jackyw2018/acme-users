import React, { Component } from 'react';
import axios from 'axios';

import Table from './Table';
import Search from './Search';
import PaginationSection from './Pagination';

class Users extends Component {
  styles = {
    Table: {},
    searchSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBotton: '0',
    },
    small: {
      marginBottom: '1rem',
    },
  };

  state = {
    count: 0,
    users: [],
    pages: 0,
    currentPage: 0,
    searchTerm: '',
    highlighted: false,
  };

  fetchUsers = (id, searchTerm) => {
    const apiUrl = searchTerm
      ? `https://acme-users-api.herokuapp.com/api/users/search/${searchTerm}/${id}`
      : `https://acme-users-api.herokuapp.com/api/users/${id}`;

    axios
      .get(apiUrl)
      .then(response => response.data)
      .then(({ count, users }) =>
        this.setState({
          count,
          users,
          pages: Math.ceil(count / 50),
          currentPage: Number(id) + 1,
        })
      )
      .catch(error => console.log(error));
  };

  componentDidMount() {
    const id = this.props.match.params.id || 0;
    const searchTerm = this.props.match.params.searchTerm;
    this.fetchUsers(id, searchTerm);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.id !== prevProps.match.params.id ||
      this.props.match.params.searchTerm !== prevProps.match.params.searchTerm
    ) {
      const id = this.props.match.params.id || 0;
      const searchTerm = this.props.match.params.searchTerm;
      this.fetchUsers(id, searchTerm);
    }
  }

  onClearClick = () => {
    this.setState({ searchTerm: '', highlighted: false }, () => {
      this.props.history.push('/users');
    });
  };

  onPageClick = (page, searchTerm) => {
    if (this.props.match.params.searchTerm) this.redirect(page, searchTerm);
    else this.redirect(page);
  };

  redirect = (page, searchTerm) => {
    if (searchTerm)
      this.props.history.push(`/users/search/${searchTerm}/${page - 1}`);
    else this.props.history.push(`/users/${page - 1}`);
  };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ highlighted: true }, () => {
      this.redirect(1, this.state.searchTerm);
    });
  };

  render() {
    const {
      styles,
      onPageClick,
      onInputChange,
      onFormSubmit,
      onClearClick,
    } = this;
    const { count, pages, users, currentPage, searchTerm } = this.state;
    return (
      <div>
        <section style={styles.searchSection}>
          <PaginationSection
            onPageClick={onPageClick}
            currentPage={currentPage}
            pages={pages}
            searchTerm={this.props.match.params.searchTerm}
          />
          <Search
            onChange={onInputChange}
            onSubmit={onFormSubmit}
            searchTerm={searchTerm}
            onClick={onClearClick}
          />
          <small className="text-muted" style={styles.small}>
            About {count} Results | Page {currentPage} of {pages}
          </small>
        </section>
        <div style={styles.Table}>
          <Table users={users} />
        </div>
      </div>
    );
  }
}

export default Users;
