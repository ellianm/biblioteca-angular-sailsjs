import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient, private userService: UserService) { }

    authenticate(userName: string, password: string) {
        return this.http
            .post(environment.apiUrl + '/auth',
                { userName, password },
                { observe: 'response' }
            )
            .pipe(tap(res => {
                const authToken = res.headers.get('token');
                this.userService.setToken(authToken);
            }));
    }
}