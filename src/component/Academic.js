import { observer } from "mobx-react";
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import academicStore from "../dataStore/academicStore";

const Academic = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {academicStore.college.map((item) => (
            <Col sm={6} md={4} xl={3}>
              <Card className="text-center">
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Department: {item.department}</Card.Title>
                  <Card.Text>Contact Number: {item.number}</Card.Text>
                  <p variant="primary"> {item.email} </p>
                </Card.Body>
                <Card.Footer className="footer">{item.location}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default observer(Academic);
