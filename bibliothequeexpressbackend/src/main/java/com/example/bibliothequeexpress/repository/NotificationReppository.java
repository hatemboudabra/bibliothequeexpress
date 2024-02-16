package com.example.bibliothequeexpress.repository;

import com.example.bibliothequeexpress.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationReppository extends JpaRepository<Notification,Long> {
    @Query("SELECT n FROM Notification n JOIN n.user u WHERE u.id = :userId")
    List<Notification> findNotificationsByUserId(@Param("userId") Long userId);
}
