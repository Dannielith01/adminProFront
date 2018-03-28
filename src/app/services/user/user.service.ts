import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) { }

  login( user: User, remember: boolean = false ) {
    const url = URL_SERVICES + '/login';

    if (remember) {
      localStorage.setItem( 'email', user.email );
    } else {
      localStorage.removeItem( 'email' );
    }

    return this.http.post( url, user )
                .map((resp: any) => {
                  localStorage.setItem( 'id', resp.id );
                  localStorage.setItem( 'token', resp.token );
                  localStorage.setItem( 'user', JSON.stringify( resp.token ) );
                });
  }

  createUser(user: User) {
    const url = URL_SERVICES + '/user';

    return this.http.post( url, user )
        .map((resp: any) => {
          // TODO: poner un alert de usuario creado correctamente.
          return resp.user;
        });
  }
}
