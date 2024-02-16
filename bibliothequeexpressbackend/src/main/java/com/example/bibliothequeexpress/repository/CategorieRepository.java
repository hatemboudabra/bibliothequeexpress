package com.example.bibliothequeexpress.repository;

import com.example.bibliothequeexpress.entity.Book;
import com.example.bibliothequeexpress.entity.Categorie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie,Long> {

}
