package com.example.bibliothequeexpress.entity;

import com.example.bibliothequeexpress.entity.file.Document;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "book")
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Date publicationDate;
    private Long copiesAvailable;
    private boolean favorite;
    private boolean archived;

    @ManyToOne
    private Categorie categorie;
    @OneToMany
    List<Reservation> reservations = new ArrayList<>();
    @OneToMany
    List<Emprunts> emprunts = new ArrayList<>();
    @OneToOne
    Document document;
}
