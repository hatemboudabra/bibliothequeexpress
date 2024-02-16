package com.example.bibliothequeexpress.services.serviceImpl;

import com.example.bibliothequeexpress.Dto.BookDto;
import com.example.bibliothequeexpress.entity.Book;
import com.example.bibliothequeexpress.entity.Categorie;
import com.example.bibliothequeexpress.repository.BookRepository;
import com.example.bibliothequeexpress.repository.CategorieRepository;
import com.example.bibliothequeexpress.services.BookServices;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import com.google.zxing.WriterException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
@Service

public class BookServiceImpl implements BookServices {
    private final BookRepository bookRepository;
    private final CategorieRepository categorieRepository;
    @Autowired
    public BookServiceImpl(BookRepository bookRepository, CategorieRepository categorieRepository) {
        this.bookRepository = bookRepository;
        this.categorieRepository = categorieRepository;
    }


    @Override
    public Book createBook(BookDto bookDto) {
        Book book = new Book();
        book.setTitle(bookDto.getTitle());
        book.setPublicationDate(bookDto.getPublicationDate());
        book.setCopiesAvailable(bookDto.getCopiesAvailable());
        Categorie categorie = categorieRepository.findById(bookDto.getIdCategorie()).get();
        book.setCategorie(categorie);
        book = bookRepository.save(book);
        return book;

    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }


    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);

    }
    public byte[] generateQRCode(Long id) throws WriterException, IOException {
        Optional<Book> optionalBook = bookRepository.findById(id);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            String bookData = "Book ID: " + book.getId() + ", Title: " + book.getTitle();
            return generateQRCodeBytes(bookData);
        } else {
            throw new IllegalArgumentException("Book not found");
        }
    }

    private byte[] generateQRCodeBytes(String data) throws WriterException, IOException {
        QRCodeWriter writer = new QRCodeWriter();
        BitMatrix bitMatrix = writer.encode(data, com.google.zxing.BarcodeFormat.QR_CODE, 300, 300);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", outputStream);
        return outputStream.toByteArray();
    }
    public byte[] generateBarcode(Long id) throws WriterException, IOException {
        Optional<Book> optionalBook = bookRepository.findById(id);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            String bookData = "Book ID: " + book.getId() + ", Title: " + book.getTitle();
            return generateBarcodeBytes(bookData);
        } else {
            throw new IllegalArgumentException("Book not found");
        }
    }

    private byte[] generateBarcodeBytes(String data) throws WriterException, IOException {
        com.google.zxing.Writer writer = new com.google.zxing.MultiFormatWriter();
        BitMatrix bitMatrix = writer.encode(data, BarcodeFormat.CODE_128, 300, 100);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", outputStream);
        return outputStream.toByteArray();
    }
    @Override
    public Page<Book> searchBooksByTitle(String title, int pageNumber, int pageSize, String sortBy) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy).ascending());

        if (!StringUtils.hasText(title)) {
            return bookRepository.findAll(pageable);
        }

        return bookRepository.findByTitleContainingIgnoreCase(title, pageable);
    }

    @Override
    public Book addBookToFavorites(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setFavorite(true);
            return bookRepository.save(book);
        }
        return null; //livre avec cet ID n'est pas trouvé
    }
    @Override
    public Book archiveBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setArchived(true);
            return bookRepository.save(book);
        }
        return null; // Gérer le cas où le livre avec cet ID n'est pas trouvé
    }


    public byte[] generatePDF(Long id) throws WriterException, IOException, DocumentException {
        Optional<Book> optionalBook = bookRepository.findById(id);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            Document document = new Document();
            PdfWriter.getInstance(document, outputStream);

            document.open();
            document.add(new Paragraph("Book ID: " + book.getId()));
            document.add(new Paragraph("Title: " + book.getTitle()));
            document.add(new Paragraph("Publication Date: " + book.getPublicationDate()));
            document.add(new Paragraph("Copies Available: " + book.getCopiesAvailable()));
            document.close();

            return outputStream.toByteArray();
        } else {
            throw new IllegalArgumentException("Book not found");
        }
    }

    public List<Book> findBooksByCategoryName(String categoryName) {
        return bookRepository.findByCategorieNomCategorie(categoryName);
    }
}
