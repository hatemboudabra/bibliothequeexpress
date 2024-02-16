package com.example.bibliothequeexpress.services;

import com.example.bibliothequeexpress.Dto.ReservationDto;
import com.example.bibliothequeexpress.entity.Notification;
import com.example.bibliothequeexpress.entity.Reservation;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ReservationService {
   public  Reservation createreservation(ReservationDto reservationDto);
    public List<Reservation> getAllReservation();
    public Optional<Reservation> getReservationById(Long id);
    public Reservation updateReservation(Long reservationId, ReservationDto updatedReservationDto);
    public void deleteReservation(Long id);
}
