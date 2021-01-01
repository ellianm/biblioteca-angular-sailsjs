import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TokenService } from './token.service';
import { UserAuth } from '../models/UserAuth';
import { BehaviorSubject } from 'rxjs';

import jwt_decode from "jwt-decode";


@Injectable({ providedIn: 'root' })
export class UserService {

    userId: number;

    private userSubject = new BehaviorSubject<UserAuth>(null);

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        let user = jwt_decode(this.tokenService.getToken()) as UserAuth;
        this.userId = user.id;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }
}
