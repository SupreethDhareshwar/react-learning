// src/components/Header.js

import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

export default class Header extends Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Learning</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1}>
        Home
      </NavItem>
      <NavItem eventKey={2} >
        About Us
      </NavItem>
      <NavItem eventKey={2} >
        Logout
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          );
    }

}
