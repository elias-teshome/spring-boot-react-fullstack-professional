package com.example.demo.controller;

import com.example.demo.student.Gender;
import com.example.demo.student.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1/students")
public class StudentController {

  @GetMapping
    public List<Student> getAllStudent()
    {
        List<Student> students = Arrays.asList(
                new Student(1L, "eliaait43@gmail.com", "elias", Gender.MALE),
                new Student(2L, "eliaait43@gmail.com", "girma", Gender.MALE),
                new Student(3L, "aska@gmail.com", "aska", Gender.FEMALE)
        );
      return students;

    }
}
