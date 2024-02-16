package com.example.bibliothequeexpress.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@Table(name = "notification")
public class Notification implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String message;
    private Date sendDate;
    @ManyToOne()
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    Reservation reservation;
    @ManyToOne()
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    User user;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
     Emprunts emprunt;
}
