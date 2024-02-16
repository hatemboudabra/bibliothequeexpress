package com.example.bibliothequeexpress.services;
import com.example.bibliothequeexpress.Dto.NotificationDto;
import com.example.bibliothequeexpress.entity.Notification;

import java.time.Duration;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface NotificationService {

    public List<Notification> getAllNotification();
    public Optional<Notification> getNotificationById(Long id);
    public Notification addNotification(NotificationDto notificationDto );

        public Notification updateNotification(Long notificationId, NotificationDto updatedNotificationDto);
    public void deleteNotification(Long id);
}
