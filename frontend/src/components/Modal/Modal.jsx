import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function Example(props) {
    
  const [show, setShow] = useState(false);

  const id = (props.message).id
  const title = (props.message).title
  const status = (props.message).status


  const handleClose = async () => {
    setShow(false);
    //window.alert("save")
    // console.log(title);
    // console.log(id)
    if(newItem !== "" && newItem !== title){
        try{
          const response = await fetch('http://localhost:9090/updateTodoById/'+id,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
              status:status,
              title:newItem,
            }),
          });
          const data = await response.json();
          console.log('API Response:', data);
          window.location.reload();
        } catch (error) {
          console.error('Error sending data:', error);
      }
      }
      else if(newItem === title){
        window.alert("Değişiklik yapmadınız");
      }
}

  const handleShow = () => setShow(true);
  const [newItem, setNewItem] = useState("");


  return (
    <>
        <i onClick={handleShow}
        className='fa-solid fa-pen-to-square'></i>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control
          placeholder={title}
          type="text"
          value={newItem}
          onChange={e=>setNewItem(e.target.value)}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;