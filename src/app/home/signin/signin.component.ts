import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    @ViewChild('username') userName: ElementRef<HTMLInputElement>;

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {
        const userName = this.userName.nativeElement.value;
        this.auth.getUserFromGithub(userName)
            .subscribe(data => console.log(data), err => console.log(err));

        this.router.navigate(['orders']);
    }
}