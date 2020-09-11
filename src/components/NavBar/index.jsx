import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">AppLike Frontend Test</NavbarBrand>
    <Collapse isOpen navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/">Overview</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/campaigns">Campaigns</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/create">Create</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default NavBar;
