import React, { Component } from 'react'
//Bootstrap
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Container } from 'react-bootstrap';

export default class TodoButtons extends Component {
  render() {
    return (
      <Container className="pt-1 pb-1 mb-5 bg-secondary border rounded" >
        <ButtonGroup className='container mb-1 gap-4'>
          <Button variant="btn btn-outline-dark" >All Tasks</Button>
          <Button variant="btn btn-outline-dark" >Done Tasks</Button>
          <Button variant="btn btn-outline-dark" >Todos</Button>
        </ButtonGroup>
        </Container>
    );
  }
}

// yorum satırı