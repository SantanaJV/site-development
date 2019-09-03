import React from 'react';
import './styles.css'

import { Navbar, Nav } from 'react-bootstrap';

export default class Footer extends React.Component {

  render() {
    return (
      <Navbar variant="dark" bg="dark" className="mt-3">
        <Navbar.Brand>Seu Site</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="eshop" className="footer-navlink">E-Shop</Nav.Link>
          <Nav.Link href="blog" className="footer-navlink">Blog</Nav.Link>
        </Nav>
        <Navbar.Text>
          2019-2020 &#169; João Santana
        </Navbar.Text>
      </Navbar>
    );
  }
}