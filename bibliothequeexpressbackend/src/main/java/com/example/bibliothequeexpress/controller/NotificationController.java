package com.example.bibliothequeexpress.controller;

import com.example.bibliothequeexpress.Dto.EmpruntDto;
import com.example.bibliothequeexpress.Dto.NotificationDto;
import com.example.bibliothequeexpress.Dto.ReservationDto;
import com.example.bibliothequeexpress.entity.Emprunts;
import com.example.bibliothequeexpress.entity.Notification;
import com.example.bibliothequeexpress.entity.Reservation;
import com.example.bibliothequeexpress.services.serviceImpl.NotificationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.Date;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Notification")
public class NotificationController {

    private final NotificationServiceImpl notificationService;
    @Autowired
    public NotificationController(NotificationServiceImpl notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping(path = "/addNotification")
    public Notification addNotification(@RequestBody NotificationDto notificationDto){
           return  notificationService.addNotification(notificationDto);
    }
    @GetMapping
    public List<Notification> getAllNotification(){
        return notificationService.getAllNotification();
    }

        @DeleteMapping("{id}")
    public ResponseEntity<String> deleteNotification(@PathVariable("id") long
                                                        id){
// delete employee from DB
        notificationService.deleteNotification(id);
        return new ResponseEntity<String>("notification deleted successfully!.", HttpStatus.OK);
    }
    @GetMapping("/byUser")
    public List<Notification> getNotificationsByUser(@RequestParam Long userId) {
        return notificationService.findNotificationsByUserId(userId);
    }

}
