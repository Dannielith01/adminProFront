import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  theme: Themes = {
    url: 'assets/css/colors/default-dark.css',
    name: 'default-dark'
  };

  constructor( @Inject(DOCUMENT) private _document) {
    this.getSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify( this.theme ));
  }

  getSettings() {
    if ( localStorage.getItem('settings') ) {
      this.theme = JSON.parse( localStorage.getItem('settings') );
    }

    this.applyTheme( this.theme.name );
  }

  applyTheme( theme: string ) {
    const url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.theme.url = url;
    this.theme.name = theme;

    this.saveSettings();
  }

}

interface Themes {
  url: string;
  name: string;
}
