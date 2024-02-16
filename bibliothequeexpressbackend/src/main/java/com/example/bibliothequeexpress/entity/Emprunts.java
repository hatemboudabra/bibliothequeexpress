package com.example.bibliothequeexpress.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "emprunt")
public class Emprunts implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateEmprunt;
    private Date dateRetourPrevue;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    User user;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    Book book;
    @OneToMany
    List< Notification> notifications =new ArrayList<>();
    @Enumerated(EnumType.STRING)
    @Column(name = "statut_emprunt")
    private StatutEmprunt statutEmprunt;
}
