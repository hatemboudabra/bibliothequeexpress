package com.example.bibliothequeexpress.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {
    private String title;
    private Date publicationDate;
    private Long copiesAvailable;
    private Long idCategorie;
    private List<Long> idReservation;
    private List<Long> idEmprunt;


}
