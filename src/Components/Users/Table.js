import React from 'react';

import Table from 'react-bootstrap/Table';

const TableContent = ({ users }) => {
  const styles = {
    th: {
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    td: {
      textAlign: 'center',
      verticalAlign: 'middle',
    },
  };

  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th style={styles.th}>First Name</th>
          <th style={styles.th}>Last Name</th>
          <th style={styles.th}>Middle Name</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Title</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, firstName, lastName, middleName, email, title }) => (
          <tr key={id}>
            <td style={styles.td}>{firstName}</td>
            <td style={styles.td}>{lastName}</td>
            <td style={styles.td}>{middleName}</td>
            <td style={styles.td}>{email}</td>
            <td style={styles.td}>{title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableContent;
