package com.example.bibliothequeexpress.controller;

import com.example.bibliothequeexpress.entity.*;
import com.example.bibliothequeexpress.repository.UserRepository;
import com.example.bibliothequeexpress.services.AdminServices;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
@Tag(name = "Admin")
public class AdminController {
    @Autowired
    AdminServices adminServices;
@Autowired
    UserRepository userRepository;

    @Operation(description = "getAllUsers")
    @GetMapping(path = "/getAllUsers")
    List<User> getAllUsers() {
        return adminServices.getall();
    }

    @Operation(description = "add user")
    @PostMapping(path = "/updateUser/{id}")
    void UpdatUser(@PathVariable Long id, @RequestBody String role) {
        adminServices.UpdateROle(id, role);
    }

    @Operation(description = "getAllRole")
    @GetMapping(path = "/getAllRole")
    List<Role> getAllRole() {
        return adminServices.getAllROles();

    }
    @GetMapping("/{userId}/notifications")
    public ResponseEntity<List<Notification>> getNotificationsByUserId(@PathVariable Long userId) {
        // Récupérer l'utilisateur par son ID
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            List<Notification> notifications = adminServices.getNotificationsFromUser(user);

            if (notifications.isEmpty()) {
                return ResponseEntity.noContent().build(); // Aucune notification trouvée
            } else {
                return ResponseEntity.ok(notifications);
            }
        } else {
            return ResponseEntity.notFound().build(); // Utilisateur non trouvé
        }
    }
    @GetMapping("/{userId}/reservation")
    public ResponseEntity<List<Reservation>> getReservationByUserId(@PathVariable Long userId) {
        // Récupérer l'utilisateur par son ID
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            List<Reservation> reservation = adminServices.getReservationFromUser(user);

            if (reservation.isEmpty()) {
                return ResponseEntity.noContent().build(); // Aucune notification trouvée
            } else {
                return ResponseEntity.ok(reservation);
            }
        } else {
            return ResponseEntity.notFound().build(); // Utilisateur non trouvé
        }
    }
    @GetMapping("/{userId}/emprunts")
    public ResponseEntity<List<Emprunts>> getEmpruntsByUserId(@PathVariable Long userId) {
        // Récupérer l'utilisateur par son ID
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            List<Emprunts> emprunts = adminServices.getEmpruntFromUser(user);

            if (emprunts.isEmpty()) {
                return ResponseEntity.noContent().build(); // Aucune notification trouvée
            } else {
                return ResponseEntity.ok(emprunts);
            }
        } else {
            return ResponseEntity.notFound().build(); // Utilisateur non trouvé
        }
    }

}