import React, { Component, useState } from 'react'
//Bootstrap
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Container } from 'react-bootstrap';

const TodoButtons = ()=> {
      return (
      <Container className="pt-1 pb-1 mb-2 bg-secondary border rounded" >
        <ButtonGroup className='container mb-1 gap-4'>
          <Button variant="btn btn-outline-dark"  >All Tasks</Button>
          <Button variant="btn btn-outline-dark" >Done Tasks</Button>
          <Button variant="btn btn-outline-dark" >Todos</Button>
        </ButtonGroup>
        </Container>
    );
  }
export default TodoButtons;

// yorum satırı