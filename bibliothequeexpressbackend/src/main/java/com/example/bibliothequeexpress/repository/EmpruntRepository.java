package com.example.bibliothequeexpress.repository;

import com.example.bibliothequeexpress.entity.Emprunts;
import com.example.bibliothequeexpress.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpruntRepository extends JpaRepository<Emprunts,Long> {
    @Query("SELECT e FROM Emprunts e JOIN e.user u WHERE u.id = :userId")
    List<Emprunts> findEmpruntByUserId(@Param("userId") Long userId);
}
