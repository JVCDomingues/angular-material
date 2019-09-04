import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    baseApi = 'https://api.github.com/users/';

    constructor(private http: HttpClient) { }

    getUserFromGithub(user: string) {
        return this.http.get<User>(this.baseApi + user);
    }
}