package com.example.bibliothequeexpress.controller;

import com.example.bibliothequeexpress.entity.Categorie;
import com.example.bibliothequeexpress.services.serviceImpl.CategorieServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/categories")
public class CategorieController {
    private final CategorieServiceImpl categorieService;

    public CategorieController(CategorieServiceImpl categorieService) {
        this.categorieService = categorieService;
    }

    //  créer une nouvelle catégorie
    @PostMapping
    public ResponseEntity<Categorie> createCategorie(@RequestBody Categorie categorie) {
        Categorie newCategorie = categorieService.createCategorie(categorie);
        return new ResponseEntity<>(newCategorie, HttpStatus.CREATED);
    }
    //  récupérer toutes les catégories
    @GetMapping
    public ResponseEntity<List<Categorie>> getAllCategories() {
        List<Categorie> categories = categorieService.getAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
    //  récupérer une catégorie par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Categorie> getCategorieById(@PathVariable Long id) {
        Optional<Categorie> categorie = categorieService.getCategorieById(id);
        return categorie.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //  mettre à jour une catégorie existante
    @PutMapping("/{id}")
    public ResponseEntity<Categorie> updateCategorie(@PathVariable Long id, @RequestBody Categorie updatedCategorie) {
        Categorie updated = categorieService.updateCategorie(id, updatedCategorie);
        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    // supprimer une catégorie par son ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategorie(@PathVariable Long id) {
        categorieService.deleteCategorie(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
