import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenus: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Progress', url: '/progress'},
        {title: 'Graphs', url: '/graph'},
        {title: 'Promises', url: '/promises'},
        {title: 'Rxjs', url: '/rxjs'},
      ]
    }
  ];

  constructor() { }

}
