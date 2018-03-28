import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function initPlugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  remember: boolean;

  constructor(
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    initPlugins();

    if (localStorage.getItem('email')) {
      this.remember = true;
    }

    this.email = localStorage.getItem('email') || '';
  }

  login( form: NgForm ) {
    if (form.invalid) {
      return;
    }

    const user = new User(
      null,
      null,
      form.value.email,
      form.value.pass,
    );

    this.userService.login( user, form.value.remember)
        .subscribe( () => this.router.navigate(['/dashboard']) );

  }

}
