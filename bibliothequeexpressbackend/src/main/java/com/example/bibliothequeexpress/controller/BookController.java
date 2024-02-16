package com.example.bibliothequeexpress.controller;


import com.example.bibliothequeexpress.Dto.BookDto;
import com.example.bibliothequeexpress.Dto.EmpruntDto;
import com.example.bibliothequeexpress.entity.Book;
import com.example.bibliothequeexpress.entity.Categorie;
import com.example.bibliothequeexpress.entity.Emprunts;
import com.example.bibliothequeexpress.services.serviceImpl.BookServiceImpl;
import com.google.zxing.WriterException;
import com.itextpdf.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/books")
public class BookController {
    private final BookServiceImpl bookService;
    @Autowired
    public BookController(BookServiceImpl bookService) {
        this.bookService = bookService;
    }
    @PostMapping(path = "/createBook")
    public Book createBook(@RequestBody BookDto bookDto)
            throws Exception{ return bookService.createBook(bookDto);}
    @GetMapping
    public ResponseEntity<List<Book>> getbooks (){
        List<Book> books = bookService.getAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return bookService.getBookById(id)
            .map(book -> new ResponseEntity<>(book, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/{id}/qrcode")
    public ResponseEntity<byte[]> generateQRCode(@PathVariable Long id) {
        try {
            byte[] qrCodeBytes = bookService.generateQRCode(id);
            return ResponseEntity.ok().header("Content-Type", "image/png").body(qrCodeBytes);
        } catch (IOException | com.google.zxing.WriterException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{id}/barcode")
    public ResponseEntity<byte[]> generateBarcode(@PathVariable Long id) {
        try {
            byte[] barcodeBytes = bookService.generateBarcode(id);
            return ResponseEntity.ok().header("Content-Type", "image/png").body(barcodeBytes);
        } catch (IOException | WriterException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Exemple de recherche par titre avec pagination
    @GetMapping("/search")
    public ResponseEntity<Page<Book>> searchBooksByTitle(
        @RequestParam(required = false) String title,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "title") String sortBy
    ) {
        Page<Book> books = bookService.searchBooksByTitle(title, page, size, sortBy);
        return new ResponseEntity<>(books, HttpStatus.OK);
    }
    @PutMapping("/{id}/favorite")
    public ResponseEntity<Book> addBookToFavorites(@PathVariable Long id) {
        Book book = bookService.addBookToFavorites(id);
        if (book != null) {
            return new ResponseEntity<>(book, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/archive")
    public ResponseEntity<Book> archiveBook(@PathVariable Long id) {
        Book book = bookService.archiveBook(id);
        if (book != null) {
            return new ResponseEntity<>(book, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping(value = "/pdf/{id}", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<byte[]> generatePDF(@PathVariable Long id) {
        try {
            byte[] pdfBytes = bookService.generatePDF(id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentDispositionFormData("inline", "book.pdf");
            headers.setContentType(MediaType.APPLICATION_PDF);

            return ResponseEntity.ok().headers(headers).body(pdfBytes);
        } catch (WriterException | IOException | DocumentException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/byCategory")
    public List<Book> getBooksByCategory(@RequestParam String categoryName) {
        return bookService.findBooksByCategoryName(categoryName);
    }

}
