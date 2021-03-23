import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { faDungeon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navigator = () => {
  return (
    <Navbar className="navbar" sticky="top" bg="secondery" variant="dark">
      <Navbar.Brand href="/">
        <FontAwesomeIcon
          icon={faDungeon}
          size="lg"
          inverse
          transform="shrink-1"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="admission">Admission</Nav.Link>
        <Nav.Link href="academic">Academic</Nav.Link>
        <Nav.Link href="alumni">Alumni</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="dark">Search</Button>
      </Form>
    </Navbar>
  );
};
