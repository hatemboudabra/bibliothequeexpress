package com.example.bibliothequeexpress.services;

import com.example.bibliothequeexpress.Dto.BookDto;
import com.example.bibliothequeexpress.entity.Book;
import com.example.bibliothequeexpress.entity.Categorie;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface BookServices {
    public Book  createBook(BookDto bookDto);
    public List<Book> getAllBooks();
    public Optional<Book> getBookById(Long id);

    public void deleteBook(Long id);

    public Page<Book> searchBooksByTitle(String title, int pageNumber, int pageSize, String sortBy);
    public Book addBookToFavorites(Long id);
    public Book archiveBook(Long id);
}
