package com.frknsrky.TodoApp.repo;

import com.frknsrky.TodoApp.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITodoRepo extends JpaRepository<Todo,Long> {

}
