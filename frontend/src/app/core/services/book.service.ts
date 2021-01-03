import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Book } from '../models/Book';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class BookService {

    constructor(private http: HttpClient,
        private formBuilder: FormBuilder,
        private userService: UserService) { }

    getNewBooks() {
        return this.http.get<Book[]>(environment.apiUrl + '/book/newBooks/'+ this.userService.userId);
    }

    addBook(book: Book) {
        return this.http.post(environment.apiUrl + '/book', book);
    }

    saveBook(book: Book) {
        return this.http.put(environment.apiUrl + '/book/' + book.id, book);
    }

    favorite(book: Book) {
        return this.http.post(environment.apiUrl + '/book/favorite',
            { id: book.id, favorited: book['favorited'], user: this.userService.userId }
        );
    }
    getUserBooks() {
        return this.http.get(environment.apiUrl + '/book/userBooks/' + this.userService.userId);
    }

}
