import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <Nav fill variant="pills" defaultActiveKey="link-0">
      <Nav.Item>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/users" className="nav-link" activeClassName="active">
          Users
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
