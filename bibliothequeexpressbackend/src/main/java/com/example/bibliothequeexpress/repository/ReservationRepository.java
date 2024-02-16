package com.example.bibliothequeexpress.repository;

import com.example.bibliothequeexpress.entity.Notification;
import com.example.bibliothequeexpress.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    @Query("SELECT r FROM Reservation r JOIN r.user u WHERE u.id = :userId")
    List<Reservation> findReservationByUserId(@Param("userId") Long userId);
}
