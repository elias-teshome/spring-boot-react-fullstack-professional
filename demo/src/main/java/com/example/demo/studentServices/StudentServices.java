package com.example.demo.studentServices;

import com.example.demo.student.Student;
import com.example.demo.studentRepository.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class StudentServices {

    private final StudentRepository studentRepository;

    public List<Student> getAllStudents()
    {
        return studentRepository.findAll();
    }

    public void save(Student student) {
        studentRepository.save(student);
    }
}
