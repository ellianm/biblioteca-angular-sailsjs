import { Book } from './../../../core/models/Book';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import { BookImpl } from 'src/app/core/modelsImpl/BookImpl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  test() {
    let book = new BookImpl();
    book.id = 2;
    book.author = 'Shakespeare';
    book.releaseDate = new Date();
    book.createdAt = new Date();
    this.books.push(book, book, book, book)
  }

  loadBooks() {
    this.bookService.getUserBooks().subscribe(
      (book) => {
        this.books = book;
      }
    )
  }

  openDocument(book) {
    this.router.navigate(['viewBook/' + book.id]);
  }

}
