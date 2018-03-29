import { Pipe, PipeTransform } from '@angular/core';

import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, type: string = 'users'): any {
    const url = URL_SERVICES +
                '/images/' + type + '/' + img;

    return url;
  }

}
