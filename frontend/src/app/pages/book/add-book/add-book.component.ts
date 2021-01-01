import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/core/models/Book';
import { MessageServiceResolver } from 'src/app/core/services/message-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private messageService: MessageServiceResolver,
    private userService: UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.getBookForm();
  }
  getBookForm() {
    return this.formBuilder.group({
      author: ['', Validators.required],
      name: ['', Validators.required],
      releaseDate: ['', Validators.required],
      pictureURL: ['']
    });
  }

  confirm() {
    let newBook = this.form.getRawValue() as Book;
    newBook.user = new User();
    newBook.user.id = this.userService.userId;
    this.bookService.addBook(newBook).subscribe(
      () => {
        this.messageService.success("Livro adicionado com sucesso!");
        this.router.navigate(['']);

      },
      err => this.messageService.error("Não foi possível adicionar este livro, " + err.error.message)
    )
  }

}
