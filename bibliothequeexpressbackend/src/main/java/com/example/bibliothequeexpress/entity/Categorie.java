package com.example.bibliothequeexpress.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table( name = "Categorie")
public class Categorie implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String nomCategorie;
    @OneToMany
    List<Book> book=new ArrayList<>();


}
