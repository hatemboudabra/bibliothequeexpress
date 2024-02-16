package com.example.bibliothequeexpress.services.serviceImpl;

import com.example.bibliothequeexpress.entity.*;
import com.example.bibliothequeexpress.repository.RoleRepository;
import com.example.bibliothequeexpress.repository.UserRepository;
import com.example.bibliothequeexpress.services.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminServicesImpl implements AdminServices {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Override
    public List<User> getall() {
        return userRepository.findAll();
    }

    @Override
    public void UpdateROle(Long id, String role) {

    }

    @Override
    public List<Role> getAllROles() {
        return roleRepository.findAll();
    }
    @Override
    public List<Notification> getNotificationsFromUser(User user) {
        // Récupérer les notifications associées à l'utilisateur
        return user.getNotificationList();
    }

    @Override
    public List<Reservation> getReservationFromUser(User user) {
        return user.getReservationList();
    }

    @Override
    public List<Emprunts> getEmpruntFromUser(User user) {
        return user.getEmprunts();
    }
}
