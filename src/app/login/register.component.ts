import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as swal from 'sweetalert';

import { User } from '../models/user.model';
import { UserService } from '../services/user/user.service';

declare function initPlugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    public userService: UserService,
    public router: Router,
  ) { }

  ngOnInit() {
    initPlugins();

    this.form = new FormGroup({
      name: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      pass: new FormControl( null, Validators.required ),
      confirmPass: new FormControl( null, Validators.required),
      conditions: new FormControl( null ),
    }, { validators: this.isNotEquals('pass', 'confirmPass') });

    this.form.setValue({
      name: 'Daniel',
      email: 'Daniel@test.com',
      pass: '123',
      confirmPass: '123',
      conditions: false,
    });
  }

  createUser() {
    if ( this.form.invalid) {
      return;
    }

    if ( !this.form.value.conditions ) {
      // swal('Importante', 'No se han aceptado las condiciones', 'warning');
      return;
    }

    const user = new User(
      this.form.value.name,
      'NA',
      this.form.value.email,
      this.form.value.pass,
    );

    this.userService.createUser( user )
        .subscribe( resp => {
          this.router.navigate(['/login']);
        });
  }

  isNotEquals(input1: string, input2: string) {
    return ( group: FormGroup ) => {
      const text1 = group.controls[input1].value;
      const text2 = group.controls[input2].value;

      return (text1 === text2) ? null : {isNotEquals: true};
    };
  }

}
