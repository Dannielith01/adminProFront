import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent implements OnInit {

  title:string = 'Título';
  progress:number = 50;

  constructor() { }

  ngOnInit() {
  }

  changeValue( value:number ) {
    this.progress += value;

    if ( this.progress <= 0 ) {
      this.progress = 0;
    } else if ( this.progress >= 100 ) {
      this.progress = 100;
    }

    return this.progress;
  }

}
