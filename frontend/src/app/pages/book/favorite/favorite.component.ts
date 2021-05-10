import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/core/models/Book';
import { MessageServiceResolver } from 'src/app/core/services/message-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private messageService: MessageServiceResolver,
    private router: Router ) { }

  books: Book[];


  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getUserFavoriteBooks().subscribe(
      (book) => {
        this.books = book;
      },
      () => this.messageService.error('Não foi possivel carregar os dados de novos livros')
    )
  }

  openDocument(book) {
    this.router.navigate(['viewBook/'+book.id]);
  }

}
