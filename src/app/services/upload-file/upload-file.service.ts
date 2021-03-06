import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class UploadFileService {

  constructor() { }

  uploadFile( file: File, type: string, id: string ) {

    return new Promise((resolve, reject) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('img', file);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 ) {
          if (xhr.status === 200) {
            resolve( xhr.response );
          } else {
            console.log('Algo salió mal');
            reject( xhr.response );
          }
        }
      };

      const url = `${URL_SERVICES}/upload/${type}/${id}`;

      xhr.open('PUT', url, true);
      xhr.send( formData );
    });
  }

}
