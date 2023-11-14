import React, { Component } from 'react';
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
// Fontawesome Icon 
// Iconu sonra eklemeye çalış
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';



export default class TodoInput extends Component {
  render() {
    return (
      <Container className="px-5 mb-2 bg-secondary border rounded" >
      <h1 className='dispaly-1'>Input Todo</h1>
      <InputGroup className='mt-2 mb-2' >
      {/* <FontAwesomeIcon icon={faBook} className="pt-2"/> */}
        <Form.Control
          placeholder="What todo"
          type="text"
        />
      </InputGroup>
      <div className="d-grid gap-2 mb-3">
      <Button 
        variant="btn btn-outline-dark" 
        id="add-todo">
          Add Todo
        </Button>   
      </div>

    </Container>
    );
  }
}
