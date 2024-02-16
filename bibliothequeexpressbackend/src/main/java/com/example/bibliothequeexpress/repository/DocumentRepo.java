package com.example.bibliothequeexpress.repository;

import com.example.bibliothequeexpress.entity.file.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepo extends JpaRepository<Document,Long> {
}
