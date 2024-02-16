package com.example.bibliothequeexpress.services.serviceImpl;

import com.example.bibliothequeexpress.Dto.EmpruntDto;
import com.example.bibliothequeexpress.entity.Book;
import com.example.bibliothequeexpress.entity.Emprunts;
import com.example.bibliothequeexpress.entity.StatutEmprunt;
import com.example.bibliothequeexpress.entity.User;
import com.example.bibliothequeexpress.repository.BookRepository;
import com.example.bibliothequeexpress.repository.EmpruntRepository;
import com.example.bibliothequeexpress.repository.UserRepository;
import com.example.bibliothequeexpress.services.EmpruntService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpruntServiceImpl implements EmpruntService {
    private final UserRepository userRepository;
    private  final BookRepository bookRepository;
    private final   EmpruntRepository empruntrepository;
@Autowired
    public EmpruntServiceImpl(UserRepository userRepository, BookRepository bookRepository, EmpruntRepository empruntrepository) {
    this.userRepository = userRepository;
    this.bookRepository = bookRepository;
    this.empruntrepository = empruntrepository;
    }


    @Override
    public Emprunts createEmprunt(EmpruntDto empruntDto) {
       Emprunts emprunts = new Emprunts();
       emprunts.setDateEmprunt(empruntDto.getDateEmprunt());
       emprunts.setDateRetourPrevue(empruntDto.getDateRetourPrevue());
       emprunts.setStatutEmprunt(StatutEmprunt.valueOf(empruntDto.getStatutEmprunt()));
        User user = userRepository.findById(empruntDto.getIdUser()).get();
        Book book = bookRepository.findById(empruntDto.getIdBook()).get();
        emprunts.setBook(book);
        emprunts.setUser(user);
        emprunts=empruntrepository.save(emprunts);
        user.getEmprunts().add(emprunts);
        userRepository.save(user);
        book.getEmprunts().add(emprunts);
        bookRepository.save(book);
        return emprunts;
    }

    @Override
    public List<Emprunts> getAllEmprunts() {
        return empruntrepository.findAll();
    }

    @Override
    public Optional<Emprunts> getEmpruntById(Long id) {
        return empruntrepository.findById(id);
    }
    @Override
    public Emprunts updateEmprunt(Long empruntId, EmpruntDto updatedEmpruntDto) {
        Optional<Emprunts> optionalEmprunts = empruntrepository.findById(empruntId);

        if (optionalEmprunts.isPresent()) {
            Emprunts emprunts = optionalEmprunts.get();

            // Update the existing Emprunts object with the new information
            emprunts.setDateEmprunt(updatedEmpruntDto.getDateEmprunt());
            emprunts.setDateRetourPrevue(updatedEmpruntDto.getDateRetourPrevue());
            emprunts.setStatutEmprunt(StatutEmprunt.valueOf(updatedEmpruntDto.getStatutEmprunt()));

            // Assuming you can update the associated User and Book as well
            User user = userRepository.findById(updatedEmpruntDto.getIdUser()).get();
            Book book = bookRepository.findById(updatedEmpruntDto.getIdBook()).get();

            // Remove previous associations
            emprunts.getUser().getEmprunts().remove(emprunts);
            emprunts.getBook().getEmprunts().remove(emprunts);

            // Update associations
            emprunts.setUser(user);
            emprunts.setBook(book);

            // Save the updated Emprunts object
            emprunts = empruntrepository.save(emprunts);

            // Update associations with User and Book
            user.getEmprunts().add(emprunts);
            userRepository.save(user);
            book.getEmprunts().add(emprunts);
            bookRepository.save(book);

            return emprunts;
        } else {
            // Handle the case where the Emprunts object with the given ID is not found
            // You can throw an exception or return null/empty value based on your application logic
            return null; // or throw new EmpruntNotFoundException("Emprunt not found with ID: " + empruntId);
        }
    }

    @Override
    public void deleteEmprunts(Long id) {
        empruntrepository.deleteById(id);

    }
}
