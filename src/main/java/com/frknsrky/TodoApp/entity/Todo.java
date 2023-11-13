package com.frknsrky.TodoApp.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "Todos")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "status")
    private String status;


    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(name = "date")
    protected Date date;
}
