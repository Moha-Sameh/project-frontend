import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export const Navigator = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Kuwait College</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="admission">Admission</Nav.Link>
        <Nav.Link href="academic">Academic</Nav.Link>
        <Nav.Link href="alumni">Alumni</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};
