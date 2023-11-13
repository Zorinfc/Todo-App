package com.frknsrky.TodoApp.api;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ITodoApi<D> {

    public ResponseEntity<List<D>> todoApiSpeedData(Long key);


    // all delete
    public ResponseEntity<?> todoApiDeleteAll();

    //CRUD
    //CREATE
    public ResponseEntity<?> todoApiCreate(D d);

    //READ-LIST
    public ResponseEntity<List<D>> todoApiList();

    //UPDATE
    public ResponseEntity<?> todoApiUpdate(Long id, D d);

    //DELETE
    public ResponseEntity<?> todoApiDelete(Long id);

    //FIND
    public ResponseEntity<?> todoApiFindById(Long id);

}
