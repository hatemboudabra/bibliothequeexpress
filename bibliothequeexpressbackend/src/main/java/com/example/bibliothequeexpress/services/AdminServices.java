package com.example.bibliothequeexpress.services;

import com.example.bibliothequeexpress.entity.*;

import java.util.List;

public interface AdminServices {
    List<User> getall();
    void UpdateROle(Long id,String role);
    List<Role> getAllROles();
    List<Notification> getNotificationsFromUser(User user);
    List<Reservation> getReservationFromUser(User user);
    List<Emprunts> getEmpruntFromUser(User user);

}
