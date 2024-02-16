package com.example.bibliothequeexpress.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmpruntDto {
    private Date dateEmprunt;
    private Date dateRetourPrevue;
    private Long idUser;
    private Long idBook;
    private String StatutEmprunt;

}
