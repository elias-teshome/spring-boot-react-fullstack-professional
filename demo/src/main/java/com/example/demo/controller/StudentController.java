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
      //throw new IllegalStateException("oops error");
      return studentServices.getAllStudents();

    }

    @PostMapping
    public void addStudent(@RequestBody Student student)
    {
      studentServices.save(student);
    }
    @DeleteMapping(path = "{id}")
    public void deletStudent(@PathVariable Long id)
    {
      studentServices.deleteStudent(id);
    }

  //put
  @PutMapping(path = "{id}")
  public void updateProduct( @PathVariable Long id, @RequestBody Student student)//the Request body means the jSON parse in to product object
  {
    studentServices.updateStudent(id,student);

  }


}
