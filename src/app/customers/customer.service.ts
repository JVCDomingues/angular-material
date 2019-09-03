import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers';

// const URL = 'https://reqres.in/api/users/2';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    api = 'https://randomuser.me/api/';

    constructor(private http: HttpClient) {}

    getCustomers() {
        return this.http.get<Customers[]>(this.api + '/?inc=id,name,location,email,picture');
    }
    
}