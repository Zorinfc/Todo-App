import React, { useEffect, useState } from 'react'
import TodoServicesApi from './../../services/TodoServicesApi'
import axios from 'axios';
import './todolist.css'





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

  const setDeleteTodo = async (id) =>{
    axios.delete("http://localhost:9090/deleteTodoById/"+id).then().catch();
    console.log('Id li data silindi' + id);

    // Hata verdi nedeninin bulamadım...
    // window.location.reload();

    setTimeout(() => {
      // Sayfayı yenile
      window.location.reload();
    }, 1000);
  }

  //Update
  // <-----------|YAPILACAK|----------->
  const editTodo = (response)=>{
    console.log(response.id);
    console.log(response.title);
    console.log(response.status);

  }
  
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
    <br /><br /><br /><br />
    <table className='table table-dark'>
      <thead className='thead-light'>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        {
          todoListApi.map((response) =>
            <tr key={response.id}>
              <td>{response.title}</td>
              <td>{response.status}</td>
               {/*Formatlanmış tarih ve saat */}
              <td>{formattedDate(response.date)}</td>
              <td>
                <div style={{cursor:'pointer'}}>
                {/*Delete Button & Function*/}
                <i onClick={() => setDeleteTodo(response.id)}
                className="fa-solid fa-trash" ></i>
                {/*Edit Button & Function*/}
                <i onClick={()=> editTodo(response)}
                className='fa-solid fa-pen-to-square'></i>
                 {/*Check Button & Function*/}
                <i onClick={() =>checkTodoUpdate(response)}
                className='fa-solid fa-check'></i>
                </div>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>

  </React.Fragment>
  )
}

export default TodoList