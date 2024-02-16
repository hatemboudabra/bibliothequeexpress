package com.example.bibliothequeexpress.controller;

import com.example.bibliothequeexpress.Dto.EmpruntDto;
import com.example.bibliothequeexpress.Dto.ReservationDto;
import com.example.bibliothequeexpress.entity.Emprunts;
import com.example.bibliothequeexpress.entity.Notification;
import com.example.bibliothequeexpress.entity.Reservation;
import com.example.bibliothequeexpress.services.ReservationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Reservation")
public class ReservationController {
    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Long id) {
        Optional<Reservation> reservation = reservationService.getReservationById(id);
        return reservation.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping(path = "/createreservation")
    public Reservation createreservation(@RequestBody ReservationDto reservationDto)
            throws Exception{ return reservationService.createreservation(reservationDto); }
    @GetMapping
    public List<Reservation> getAllReservation(){
        return reservationService.getAllReservation();
    }


    @PutMapping("{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable("id")
                                                           long id
            ,@RequestBody ReservationDto reservationDto){
        return new
                ResponseEntity<Reservation>(reservationService.updateReservation(id,reservationDto),
                HttpStatus.OK);
    }



    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable("id") long
                                                             id){
// delete employee from DB
        reservationService.deleteReservation(id);
        return new ResponseEntity<String>("Reservation deleted successfully!.", HttpStatus.OK);
    }

}
