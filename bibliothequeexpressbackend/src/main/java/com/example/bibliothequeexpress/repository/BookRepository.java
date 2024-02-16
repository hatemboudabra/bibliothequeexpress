package com.example.bibliothequeexpress.repository;

import com.example.bibliothequeexpress.entity.Book;
import com.example.bibliothequeexpress.entity.Categorie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
    Page<Book> findByTitleContainingIgnoreCase(String title, Pageable pageable);
    @Query("SELECT b FROM Book b JOIN b.categorie c WHERE c.nomCategorie = :nomCategorie")
    List<Book> findByCategorieNomCategorie(@Param("nomCategorie") String nomCategorie);}
