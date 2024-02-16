package com.example.bibliothequeexpress.services.serviceImpl;

import com.example.bibliothequeexpress.Dto.ReservationDto;
import com.example.bibliothequeexpress.entity.*;
import com.example.bibliothequeexpress.repository.BookRepository;
import com.example.bibliothequeexpress.repository.NotificationReppository;
import com.example.bibliothequeexpress.repository.ReservationRepository;
import com.example.bibliothequeexpress.repository.UserRepository;
import com.example.bibliothequeexpress.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;
    private final NotificationReppository notificationReppository;
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository, UserRepository userRepository, BookRepository bookRepository, NotificationReppository notificationReppository) {
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
        this.notificationReppository = notificationReppository;
    }


    @Override
    public Reservation createreservation(ReservationDto reservationDto) {
        Reservation reservation = new Reservation();
        reservation.setId(reservationDto.getId());
        reservation.setReservationDate(reservationDto.getReservationDate());
        User user = userRepository.findById(reservationDto.getUserid()).get();
         Book book = bookRepository.findById(reservationDto.getBookId()).get();
         reservation.setBook(book);
        reservation.setUser(user);
        reservation=reservationRepository.save(reservation);
        user.getReservationList().add(reservation);
        userRepository.save(user);
        book.getReservations().add(reservation);
        bookRepository.save(book);
        sendReservationNotification(user, book);
        return reservation;
    }
   @Scheduled(cron = "0 0 12 * * ?")
    private void sendReservationNotification(User user, Book book) {
        String userEmail = user.getEmail();
        String subject = "Confirmation de réservation";
        String message = "Cher " + user.getUsername() + ",\n\n"
                + "Vous avez réservé le livre \"" + book.getTitle() + "\" avec succès.\n\n"
                + "Merci de votre réservation.\n\n"
                + "Cordialement,\nL'équipe de la bibliothèque";

        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setFrom("hatemboudabra41@gmail.com");
        emailMessage.setTo(userEmail);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        javaMailSender.send(emailMessage);
        System.out.println("E-mail de notification envoyé à : " + userEmail);
    }

    @Override
    public List<Reservation> getAllReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

    @Override
    public Reservation updateReservation(Long reservationId, ReservationDto updatedReservationDto) {
        Optional<Reservation> optionalReservation = reservationRepository.findById(reservationId);

        if (optionalReservation.isPresent()) {
            Reservation reservation = optionalReservation.get();

            // Update the existing Reservation object with the new information
            reservation.setReservationDate(updatedReservationDto.getReservationDate());

            // Assuming you can update the associated User and Book as well
            User user = userRepository.findById(updatedReservationDto.getUserid()).get();
            Book book = bookRepository.findById(updatedReservationDto.getBookId()).get();

            // Remove previous associations
            reservation.getUser().getReservationList().remove(reservation);
            reservation.getBook().getReservations().remove(reservation);

            // Update associations
            reservation.setUser(user);
            reservation.setBook(book);

            // Save the updated Reservation object
            reservation = reservationRepository.save(reservation);

            // Update associations with User and Book
            user.getReservationList().add(reservation);
            book.getReservations().add(reservation);

            // Save the updated associations in the repositories
            userRepository.save(user);
            bookRepository.save(book);

            return reservation;
        } else {
            // Handle the case where the Reservation object with the given ID is not found
            // You can throw an exception or return null/empty value based on your application logic
            return null; // or throw new ReservationNotFoundException("Reservation not found with ID: " + reservationId);
        }
    }


    @Override
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);

    }
}
