
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
// Fontawesome Icon 
// Iconu sonra eklemeye çalış
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import TodoServicesApi from '../../services/TodoServicesApi';


 function TodoInput () {

  const [newItem, setNewItem] = useState("");
  const isItDone ='Yapılmadı'


 

  //Create
    const sendDataToApi = async()=>{
      if(newItem !=""){
        try{
          const response = await fetch('http://localhost:9090/addTodo',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
              status:isItDone,
              title:newItem,
            }),
          });
          const data = await response.json();
          console.log('API Response:', data);
          window.location.reload();
        } catch (error) {
          console.error('Error sending data:', error);
      };
      }
      else window.alert("Boş değer girilemez");
  }

    return (
      <Container className="px-5 mb-2 bg-secondary border rounded" >
      <h1 className='dispaly-1'>Input Todo</h1>
      <InputGroup className='mt-2 mb-2' >
      {/* <FontAwesomeIcon icon={faBook} className="pt-2"/> */}
        <Form.Control
          placeholder="What todo"
          type="text"
          value={newItem}
          onChange={e=>setNewItem(e.target.value)}
        />
      </InputGroup>
      <div className="d-grid gap-2 mb-3">
      <Button 
        variant="btn btn-outline-dark" 
        id="add-todo"
        onClick={sendDataToApi}
        >
          Add Todo
        </Button>   
      </div>

    </Container>
    );

}
export default TodoInput