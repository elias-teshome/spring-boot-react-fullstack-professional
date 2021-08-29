package com.example.demo.student;


import lombok.*;

import javax.persistence.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table

public class Student {

    @Id
    @SequenceGenerator(name = "students_sequence",
                       sequenceName = "students_sequence",
                       allocationSize = 1)
    @GeneratedValue(
            generator = "students_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;
    private String email;
    private String name;
    @Enumerated(EnumType.STRING)
    private Gender gender;

    public Student(String email, String name, Gender gender) {
        this.email = email;
        this.name = name;
        this.gender = gender;
    }
}
