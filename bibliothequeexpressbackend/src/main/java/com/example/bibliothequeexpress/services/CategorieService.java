package com.example.bibliothequeexpress.services;

import com.example.bibliothequeexpress.entity.Categorie;

import java.util.List;
import java.util.Optional;

public interface CategorieService {
    public Categorie createCategorie(Categorie categorie);
    public List<Categorie> getAllCategories();
    public Optional<Categorie> getCategorieById(Long id);
    public Categorie updateCategorie(Long id, Categorie updatedCategorie);
    public void deleteCategorie(Long id);



}
