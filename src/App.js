
import React from "react";
import {Nav,Container,InputGroup, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel,Form, FormGroup, FormControl} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Contact Form</span>
</nav>

<div class="formulaire">
<Form class="form">
<Form.Group>
<Form.Row>
    <Col>
    <Form.Label>First name:</Form.Label>
      <Form.Control placeholder="First name" />
      </Col>
    <Col>
    <Form.Label>Last name:</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
  </Form.Group> 
  <Form.Row> 
  <Col>   
  <Form.Label>Gender:</Form.Label>
  </Col>
  <Col>
<Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Male" />
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Female" />
  </Form.Group>
  </Col>
  </Form.Row>
  

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City:</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Ariana</option>
        <option>Beja</option>
        <option>Ben Arous</option>
        <option>Bizerte</option>
        <option>Gabes</option>
        <option>Gafsa</option>
        <option>Jendouba</option>
        <option>Kairouan </option>
        <option>Gaserine</option>
        <option>Kébili</option>
        <option>Le Kef</option>
        <option>La Manouba</option>
        <option>Ariana</option>
        <option>Mednine</option>
        <option>Mounastir</option>
        <option>Nabeul</option>
        <option>Safx</option>
        <option>Sidi Bouzid</option>
        <option>Seliana</option>
        <option>Sousse </option>
        <option>Tataouine</option>
        <option>Tozeur</option>
        <option>Tunis</option>
        <option>Zaghouan</option>
      </Form.Control>
    </Form.Group>
    
  </Form.Row>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>





</div>

    </div>
  );
}

export default App;
