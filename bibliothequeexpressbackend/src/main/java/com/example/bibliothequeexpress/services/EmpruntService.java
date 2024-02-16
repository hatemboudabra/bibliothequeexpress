package com.example.bibliothequeexpress.services;

import com.example.bibliothequeexpress.Dto.EmpruntDto;
import com.example.bibliothequeexpress.entity.Categorie;
import com.example.bibliothequeexpress.entity.Emprunts;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface EmpruntService {
    public Emprunts createEmprunt(EmpruntDto empruntDto);
    public List<Emprunts> getAllEmprunts();
    public Optional<Emprunts> getEmpruntById(Long id);
    public Emprunts updateEmprunt(Long empruntId, EmpruntDto updatedEmpruntDto);
    public void deleteEmprunts(Long id);
}
