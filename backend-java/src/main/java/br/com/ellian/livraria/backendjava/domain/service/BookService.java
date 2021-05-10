package br.com.ellian.livraria.backendjava.domain.service;

import br.com.ellian.livraria.backendjava.domain.exceptions.DataNotFoundException;
import br.com.ellian.livraria.backendjava.domain.model.Book;
import br.com.ellian.livraria.backendjava.domain.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public void delete(Long id) throws DataNotFoundException {
       Optional<Book> optBook = bookRepository.findById(id);
        optBook.ifPresent(book -> bookRepository.delete(book));
       throw new DataNotFoundException("Livro com o id:" +id+ "não encontrado");
    }
}
