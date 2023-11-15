import React, { useEffect, useState } from 'react'
import TodoServicesApi from './../../services/TodoServicesApi'
import axios from 'axios';
import './todolist.css'
import {Table} from 'react-bootstrap';
import Example from '../Modal/Modal'

function TodoList() {

  const [todoListApi, setTodoListApi]=useState([]);

  useEffect(() => {
    fetchTodoList();
  }, [])

  const fetchTodoList = async () =>{
    try{
      const response = await TodoServicesApi.todoApiGetAllTodo();
      if(response.status ===200){
        setTodoListApi(response.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  // Delete 
  const setDeleteTodo = async (id) =>{
    axios.delete("http://localhost:9090/deleteTodoById/"+id).then().catch();
    console.log('Id li data silindi' + id);

    // Hata verdi nedeninin bulamadım...
    // window.location.reload();

    setTimeout(() => {
      // Sayfayı yenile
      window.location.reload();
    }, 200);
  }
  ////////////////
  //Update
    // MODAL ILE YAPILDI
  //CheckTodo
  const checkTodoUpdate = async(response)=>{
    let id = response.id
    switch (response.status) {
      case 'Yapıldı':
        const newData1 = await fetch('http://localhost:9090/updateTodoById/'+id,{
          method:'POST',
          headers:{
          'Content-Type':'application/json',
          },
          body:JSON.stringify({
          status:'Yapılmadı',
          title:response.title
          }),
          });
          const data1 = await newData1.json();
          console.log('Api response',data1);
          window.location.reload();
        break;
      case 'Yapılmadı':
          const newData = await fetch('http://localhost:9090/updateTodoById/'+id,{
          method:'POST',
          headers:{
          'Content-Type':'application/json',
          },
          body:JSON.stringify({
          status:'Yapıldı',
          title:response.title
          }),
          });
          const data = await newData.json();
          console.log('Api response',data);
          window.location.reload();
        break;
      default:
        break;
    }
  }
  //////////////// 

  // Ustunu ciz
  const ustuCiziliMi =(response)=>{
        if(response.status === "Yapıldı"){
      return <span className='strikethrough-text'>{response.title}</span>
    }
    else
      return response.title
  }
  ////////////////

  // Tarih saat düzenlemesi
  // Gelene data == "2023-11-14T14:20:28.663+00:00 "
  const formattedDate =(date) => {
    const isoDateString = date;
    const MyDate = new Date(isoDateString);
    //console.log(isoDateString);
    const formattedDate = MyDate.toLocaleDateString('tr-TR', {
      hour:'2-digit',
      minute:'2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
        
    });
      //console.log(formattedDate);
      return formattedDate;
  }

  return (
    <React.Fragment>
    <Table className='container table table-stirped table-hover'>
      <thead className='table-dark'>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        {
          todoListApi.map((response) =>
            <tr key={response.id}>
              <td>{ustuCiziliMi(response)}</td>
               {/*Formatlanmış tarih ve saat */}
              <td>{formattedDate(response.date)}</td>
              <td>
                <div className='d-flex gap-3 justify-content-center pt-1' style={{cursor:'pointer'}}>
                  {/*Delete Button & Function*/}
                  <i onClick={() => setDeleteTodo(response.id)}
                  className="fa-solid fa-trash" ></i>
                  {/*Edit Button & Function*/}
                  {/* <Modal/> */}
                  <Example message={response}/>
                  {/*Check Button & Function*/}
                  <i onClick={() =>checkTodoUpdate(response)}
                  className='fa-solid fa-check'></i>
                </div>
              </td>
            </tr>
          )
        }
      </tbody>
    </Table>

  </React.Fragment>
  )
}

export default TodoList