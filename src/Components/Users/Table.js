import React from 'react';

import Table from 'react-bootstrap/Table';
import Highlight from './Highlight';

const TableContent = ({ users, highlight }) => {
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
            <td style={styles.td}>
              <Highlight text={firstName} highlight={highlight} />
            </td>
            <td style={styles.td}>
              <Highlight text={lastName} highlight={highlight} />
            </td>
            <td style={styles.td}>
              <Highlight text={middleName} highlight={highlight} />
            </td>
            <td style={styles.td}>
              <Highlight text={email} highlight={highlight} />
            </td>
            <td style={styles.td}>
              <Highlight text={title} highlight={highlight} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableContent;
