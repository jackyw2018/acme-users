import React from 'react';

const Search = ({ onChange, onSubmit, onClick, searchTerm }) => {
  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Results"
          onChange={onChange}
          value={searchTerm}
          style={{ borderRadius: '0' }}
        />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ borderRadius: '0' }}
          >
            <i className="fas fa-search" />
          </button>
          <button
            onClick={onClick}
            type="button"
            className="btn btn-info"
            style={{ borderRadius: '0' }}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
