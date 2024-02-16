package com.example.bibliothequeexpress.services.serviceImpl;
import com.example.bibliothequeexpress.Dto.NotificationDto;
import com.example.bibliothequeexpress.entity.Emprunts;
import com.example.bibliothequeexpress.entity.Notification;
import com.example.bibliothequeexpress.entity.Reservation;
import com.example.bibliothequeexpress.entity.User;
import com.example.bibliothequeexpress.repository.*;
import com.example.bibliothequeexpress.services.NotificationService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
@Transactional
@Service
public class NotificationServiceImpl implements NotificationService {

    private final NotificationReppository notificationReppository;
    private final ReservationRepository reservationRepository;
    private final EmpruntRepository empruntRepository;
    private final UserRepository userRepository;
    private List<Notification> notifications;

    @Autowired
    public NotificationServiceImpl(NotificationReppository notificationReppository, BookRepository bookRepository, ReservationRepository reservationRepository, EmpruntRepository empruntRepository, UserRepository userRepository) {
        this.notificationReppository = notificationReppository;
    this.reservationRepository = reservationRepository;
    this.empruntRepository = empruntRepository;
    this.userRepository = userRepository;
    }


    @Override
    public List<Notification> getAllNotification() {
        return notificationReppository.findAll();
    }

    @Override
    public Optional<Notification> getNotificationById(Long id) {
        return notificationReppository.findById(id);
    }
    @Override

    public Notification addNotification(NotificationDto notificationDto ) {
        Notification notification = new Notification();
        notification.setMessage(notificationDto.getMessage());
        User user = userRepository.findById(notificationDto.getIdUser()).get();
        Reservation reservation= reservationRepository.findById(notificationDto.getIdReservation()).get();
       Emprunts emprunts = empruntRepository.findById(notificationDto.getIdEmprunt()).get();
       notification.setEmprunt(emprunts);
        notification.setReservation(reservation);
        notification.setUser(user);
        //notification.setEmprunt();
        notification = notificationReppository.save(notification);
        user.getNotificationList().add(notification);
        reservation.getNotifications().add(notification);
        emprunts.getNotifications().add(notification);
        reservationRepository.save(reservation);
        userRepository.save(user);
        empruntRepository.save(emprunts);
        return notification;

    }

    @Override
    public Notification updateNotification(Long notificationId, NotificationDto updatedNotificationDto) {
        Optional<Notification> optionalNotification = notificationReppository.findById(notificationId);

        if (optionalNotification.isPresent()) {
            Notification notification = optionalNotification.get();

            // Update the existing Notification object with the new information
            notification.setMessage(updatedNotificationDto.getMessage());
            notification.setSendDate(updatedNotificationDto.getSendDate());

            // Assuming you can update the associated User, Reservation, and Emprunts as well
            User user = userRepository.findById(updatedNotificationDto.getIdUser()).get();
            Reservation reservation = reservationRepository.findById(updatedNotificationDto.getIdReservation()).get();
            Emprunts emprunts = empruntRepository.findById(updatedNotificationDto.getIdEmprunt()).get();

            // Remove previous associations
            notification.getUser().getNotificationList().remove(notification);
            notification.getReservation().getNotifications().remove(notification);
            notification.getEmprunt().getNotifications().remove(notification);

            // Update associations
            notification.setUser(user);
            notification.setReservation(reservation);
            notification.setEmprunt(emprunts);

            // Save the updated Notification object
            notification = notificationReppository.save(notification);

            // Update associations with User, Reservation, and Emprunts
            user.getNotificationList().add(notification);
            reservation.getNotifications().add(notification);
            emprunts.getNotifications().add(notification);

            // Save the updated associations in the repositories
            userRepository.save(user);
            reservationRepository.save(reservation);
            empruntRepository.save(emprunts);

            return notification;
        } else {
            // Handle the case where the Notification object with the given ID is not found
            // You can throw an exception or return null/empty value based on your application logic
            return null; // or throw new NotificationNotFoundException("Notification not found with ID: " + notificationId);
        }
    }

    @Override
    public void deleteNotification(Long id) {
        notificationReppository.deleteById(id);

    }
    public List<Notification> findNotificationsByUserId(Long userId) {
        return notificationReppository.findNotificationsByUserId(userId);
    }
}
