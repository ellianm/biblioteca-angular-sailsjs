package br.com.ellian.livraria.backendjava.domain.repository;

import br.com.ellian.livraria.backendjava.domain.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
