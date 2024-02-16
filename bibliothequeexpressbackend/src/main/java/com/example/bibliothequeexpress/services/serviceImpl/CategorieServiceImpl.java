package com.example.bibliothequeexpress.services.serviceImpl;

import com.example.bibliothequeexpress.entity.Categorie;
import com.example.bibliothequeexpress.repository.CategorieRepository;
import com.example.bibliothequeexpress.services.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CategorieServiceImpl implements CategorieService {
    private final CategorieRepository categorieRepository;
    @Autowired

    public CategorieServiceImpl(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }
    //créer une nouvelle catégorie
    @Override
    public Categorie createCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @Override
    public List<Categorie> getAllCategories() {
        return  categorieRepository.findAll();
    }

    @Override
    public Optional<Categorie> getCategorieById(Long id) {
        return categorieRepository.findById(id);
    }

    @Override
    public Categorie updateCategorie(Long id, Categorie updatedCategorie) {
        if (categorieRepository.existsById(id)) {
            updatedCategorie.setId(id);
            return categorieRepository.save(updatedCategorie);
        }
        return null;
    }
    @Override
    public void deleteCategorie(Long id) {
        categorieRepository.deleteById(id);

    }
}
