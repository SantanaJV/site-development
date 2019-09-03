import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

import './styles.css'

export default class Header extends Component {

	render() {
		return (
			<Navbar sticky="top" bg="light" expand="lg" className="header-navbar">
				<Navbar.Brand href="/">
					<img src="holder.js/32x30" className="mr-3" alt="logo" />
					Seu Site
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav">
					<Nav className="mr-auto">
						<Link to="/" className="nav-link header-navlink">Home</Link>
						<Link to="/eshop" className="nav-link header-navlink">Eshop</Link>
					</Nav>
					<Button variant="outline-dark">Login</Button>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}