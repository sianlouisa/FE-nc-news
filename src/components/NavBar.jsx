import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = ({ topics }) => (
  <>
    <Navbar bg="light" expand="lg" className="nav">
      <Navbar.Brand href="/">NC News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Articles</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <NavDropdown title="Topics" id="basic-nav-dropdown">
            {topics.map(topic => (
              <NavDropdown.Item href={`/topics/${topic.slug}/articles`} key={topic.slug}>
                {topic.slug}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="Post" id="basic-nav-dropdown">
            <NavDropdown.Item href="/post/article">Article</NavDropdown.Item>
            <NavDropdown.Item href="/post/topic">Topic</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default NavBar;
