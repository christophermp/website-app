import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {" "}
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Odeon AUM</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Automasjon</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>1 of 1</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
