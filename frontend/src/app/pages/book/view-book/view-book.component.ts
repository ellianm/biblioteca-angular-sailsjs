import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/Book';
import { BookService } from 'src/app/core/services/book.service';
import { MessageServiceResolver } from 'src/app/core/services/message-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private messageService: MessageServiceResolver,
    private formBuilder: FormBuilder) { }

  bookId: string;
  book: Book;

  form: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.bookId = params.id;
      this.bookService.getBook(this.bookId).subscribe(
        book => {
          this.book = book;
          this.createForm(book);
        },
        err => this.messageService.error("Não foi possivel obter os dados deste livro, tente novamente em instantes")
      )
    });

  }

  createForm(book: Book) {
    this.form = this.formBuilder.group({
      author: [book.author, Validators.required],
      name: [book.name, Validators.required],
      pictureUrl: [book.pictureURL, Validators.required],
      user: [book.user.fullName, Validators.required]
    })
  }

  update() {

  }

}
