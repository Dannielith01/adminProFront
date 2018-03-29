import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';
//import { UploadFileService } from '../upload-file/upload-file.service';

@Injectable()
export class UserService {

  constructor(
    public http: HttpClient,
    public router: Router,
    //public uploadFileService: UploadFileService,
  ) { }

  login( user: User, remember: boolean = false ) {
    const url = URL_SERVICES + '/login';

    if (remember) {
      localStorage.setItem( 'email', user.email );
    } else {
      localStorage.removeItem( 'email' );
    }

    return this.http.post( url, user )
                .map((resp: any) => {
                  this.saveLocalStorage(resp);
                });
  }

  logout() {
    localStorage.removeItem( 'id' );
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'user' );

    this.router.navigate(['/login']);
  }

  createUser(user: User) {
    const url = URL_SERVICES + '/user';

    return this.http.post( url, user )
        .map((resp: any) => {
          // TODO: poner un alert de usuario creado correctamente.
          return resp.user;
        });
  }

  updateUser( user: User ) {
    const url = URL_SERVICES + '/user/' + user._id;

    const data: any = user;
    data.token = this.getToken();

    return this.http.put( url, data )
               .map((resp: any) => {
                 this.saveLocalStorage(resp);
               });
  }
/*
  updateImage( file: File, id: string) {
    this.uploadFileService.uploadFile( file, 'users', id)
        .then( resp => {
          console.log('Then: ', resp);
        })
        .catch( resp => {
          console.log('Catch: ', resp);
        });
  }
*/
  getUser() {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }

  getToken() {
    return localStorage.getItem('token');
  }


  private saveLocalStorage(resp: any) {
    localStorage.setItem('id', resp.id);
    localStorage.setItem('token', resp.token);
    localStorage.setItem('user', JSON.stringify(resp.user));
  }

}
