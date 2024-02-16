package com.example.bibliothequeexpress.controller;


import com.example.bibliothequeexpress.Dto.EmpruntDto;
import com.example.bibliothequeexpress.entity.Emprunts;
import com.example.bibliothequeexpress.services.EmpruntService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Emprunt")
public class EmpruntController {
    private final EmpruntService empruntService;

    public EmpruntController(EmpruntService empruntService) {
        this.empruntService = empruntService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Emprunts> getEmpruntById(@PathVariable Long id) {
        Optional<Emprunts> emprunt = empruntService.getEmpruntById(id);
        return emprunt.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping(path = "/createEmprunt")
    public Emprunts createEmprunt(@RequestBody EmpruntDto empruntDto)
            throws Exception{ return empruntService.createEmprunt(empruntDto);}
    @GetMapping
    public List<Emprunts> getAllEmprunt(){
        return empruntService.getAllEmprunts();
    }


    @PutMapping("{id}")
    public ResponseEntity<Emprunts> updateEmprunt(@PathVariable("id")
                                                 long id
            ,@RequestBody EmpruntDto empruntDto){
        return new
                ResponseEntity<Emprunts>(empruntService.updateEmprunt(id,empruntDto),
                HttpStatus.OK);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmprunt(@PathVariable("id") long
                                                        id){

        empruntService.deleteEmprunts(id);
        return new ResponseEntity<String>("emprunt deleted successfully!.", HttpStatus.OK);
    }


}

