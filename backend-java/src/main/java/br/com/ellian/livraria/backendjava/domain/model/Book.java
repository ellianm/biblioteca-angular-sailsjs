package br.com.ellian.livraria.backendjava.domain.model;

import br.com.ellian.livraria.backendjava.domain.enums.BookStatus;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;

    private String author;

    private String name;

    private OffsetDateTime releaseDate;

    private BookStatus status;

    @ManyToOne
    private User user;

    private String pictureURL;
}
