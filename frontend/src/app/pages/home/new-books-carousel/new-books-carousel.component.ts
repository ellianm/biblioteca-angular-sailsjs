import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/core/models/Book';
import { MessageServiceResolver } from 'src/app/core/services/message-service.service';

@Component({
  selector: 'lv-new-books-carousel',
  templateUrl: './new-books-carousel.component.html',
  styleUrls: ['./new-books-carousel.component.scss']
})
export class NewBooksCarouselComponent implements OnInit {

  books: Book[];
  responsiveOptions;

  constructor(private bookService: BookService, private messageService: MessageServiceResolver) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.bookService.getNewBooks()
      .subscribe(books => {
        this.books = books;
      },
        () => this.messageService.error('Não foi possivel carregar os dados de novos livros'));
  }

  favorite(book: Book) {
    this.bookService.favorite(book)
      .subscribe(() => {}, err => this.messageService.error('Não foi possível adicionar o livro aos favoritos.'));
  }

}
