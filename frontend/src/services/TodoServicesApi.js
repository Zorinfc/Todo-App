import axios from "axios";


const TODO_URL = "http://localhost:9090";


// API
class TodoServicesApi{

    // http://localhost:9090
    // CRUD
    // CREATE
    // @GetMapping("/addTodo")
    todoAPiAddTodo(todo){
        return axios.post(`${TODO_URL}/addTodo`,todo);
    }

    // UPDATE 
    // @GetMapping("/updateTodoById/{id}")
    todoApiGetTodoById(id,newTodo){
        return axios.put(`${TODO_URL}/updateTodoById/${id}`,newTodo)
    }

    //DELETE
    // @GetMapping("/deleteTodoById")
    todoApiDeleteTodoById(id){
        return axios.delete(`${TODO_URL}/deleteTodoById/${id}`)
    }

    // ALL DELETE
    // @GetMapping("/deleteAllTodos")
    todoApiDeleteAllTodos(){
        return axios.delete(TODO_URL+"/deleteAllTodos")
    }

    //Get all todo
    // @GetMapping("/getAllTodos")
    todoApiGetAllTodo(){
        return axios.get(`${TODO_URL}/getAllTodos`);
    }

    // GET by ID
    // @GetMapping(value="/getTodoById/{id}")
    todoApiGetTodoById(id){
        return axios.get(`${TODO_URL}/getTodoById/${id}`)
    }

}

export default new TodoServicesApi();