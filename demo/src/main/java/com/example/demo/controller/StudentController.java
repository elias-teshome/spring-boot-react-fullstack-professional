package com.example.demo.controller;

import com.example.demo.student.Gender;
import com.example.demo.student.Student;
import com.example.demo.studentServices.StudentServices;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1/students")
@AllArgsConstructor
public class StudentController {

    private final StudentServices studentServices;

  @GetMapping
    public List<Student> getAllStudent()
    {

      return studentServices.getAllStudents();

    }

    @PostMapping("/save")
    public void addStudent(@RequestBody Student student)
    {
      studentServices.save(student);
    }
}
