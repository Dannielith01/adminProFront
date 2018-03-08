import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document,
               private _settings: SettingsService) { }

  ngOnInit() {
    this._selectTheme( null );
  }

  changeTheme( theme: string, themeRef: ElementRef ) {

    this._selectTheme( themeRef );

    this._settings.applyTheme( theme );
  }

  private _selectTheme( themeRef: any ) {
    const themes = this._document.getElementsByClassName('selector');

    if ( themeRef ) {

      for (const theme of themes) {
        theme.classList.remove('working');
      }

      themeRef.classList.add('working');

    } else {

      for (const theme of themes) {
        if (theme.getAttribute('data-theme') === this._settings.theme.name ) {
          theme.classList.add('working');
          break;
        }
      }

    }
  }

}
