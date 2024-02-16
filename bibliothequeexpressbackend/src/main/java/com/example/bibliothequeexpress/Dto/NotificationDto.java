package com.example.bibliothequeexpress.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NotificationDto {
    private Long id;
    private String message;
    private Date sendDate;
    private Long idEmprunt;
    private Long idReservation;
    private Long idUser;


}