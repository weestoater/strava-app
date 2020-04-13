import React from 'react';
import {Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
    return (
    <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home"><i className="fa fa-code text-light mr-2" /> ianburrett</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="warning"><i className="fa fa-search" /></Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    );    
}