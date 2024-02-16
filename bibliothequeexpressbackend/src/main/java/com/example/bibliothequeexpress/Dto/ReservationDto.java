package com.example.bibliothequeexpress.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDto {
    private Long id;
    private Date reservationDate;
    private Long bookId;
    private Long Userid;
}
