package com.example.bibliothequeexpress.controller;

import com.example.bibliothequeexpress.entity.file.Document;
import com.example.bibliothequeexpress.response.ResponseMessage;
import com.example.bibliothequeexpress.services.serviceImpl.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class DocController {
    @Autowired
    private FileStorageService fileStorageService;



    @PostMapping(path = "/upload")
    public ResponseEntity uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        Document fileDB=new Document();
        try {
            fileDB=fileStorageService.store(file);

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body( fileDB.getId());
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

}
