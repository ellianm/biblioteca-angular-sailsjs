import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class RegisterService {

    constructor(private http: HttpClient,
                private userService: UserService) { }

    register(user: User) {
       return this.http.post(environment.apiUrl+'/user', user);
    }
}