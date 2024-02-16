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
@Table(name="reservation")

public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private Date reservationDate;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    Book book;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    User user;
    @OneToMany
    List< Notification> notifications =new ArrayList<>();

}
