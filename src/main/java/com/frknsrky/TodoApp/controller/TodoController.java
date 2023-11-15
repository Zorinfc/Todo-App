package com.frknsrky.TodoApp.controller;

import com.frknsrky.TodoApp.entity.Todo;
import com.frknsrky.TodoApp.repo.ITodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class TodoController {


    @Autowired
    private ITodoRepo todoRepo;

    // GET ALL TODOS
    @GetMapping("/getAllTodos")
    public ResponseEntity<List<Todo>> getAllTodos(){

        try {
            List<Todo> todoList = new ArrayList<>();
            todoRepo.findAll().forEach(todoList::add);

            if (todoList.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(todoList,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    // ID ILE TODOO GETIRME
    @GetMapping("/getTodoById/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id){

        Optional<Todo> todoData = todoRepo.findById(id);

        if (todoData.isPresent()){
            return new ResponseEntity<>(todoData.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // CREATE
    @PostMapping("/addTodo")
    public ResponseEntity<Todo> addTodo(@RequestBody Todo todo){

        Todo todoObj = todoRepo.save(todo);

        return new ResponseEntity<>(todoObj, HttpStatus.CREATED);
    }

    // UPDATE BY ID
    @PostMapping("/updateTodoById/{id}")
    public ResponseEntity<Todo> updateTodoById(@PathVariable Long id, @RequestBody Todo newTodoData){

        Optional<Todo> oldTodoData= todoRepo.findById(id);

        if (oldTodoData.isPresent()){
            Todo updatedTodoData =oldTodoData.get();
            updatedTodoData.setTitle(newTodoData.getTitle());
            updatedTodoData.setStatus(newTodoData.getStatus());

            Todo todoObj = todoRepo.save(updatedTodoData);
            return new ResponseEntity<>(todoObj, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    // ID ILE TODOO SILME
    @DeleteMapping("/deleteTodoById/{id}")
    public ResponseEntity<HttpStatus> deleteTodoById(@PathVariable Long id){

        todoRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    // TUM TODOO SILME
    @DeleteMapping("/deleteAllTodos")
    public ResponseEntity<List<Todo>> deleteAllTodos(){
        todoRepo.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
