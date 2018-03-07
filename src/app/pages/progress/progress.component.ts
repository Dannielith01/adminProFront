import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  blueProgress: number;
  greenProgress: number;
  constructor() {
    this.blueProgress = 0;
    this.greenProgress = 0;
   }

  ngOnInit() {
  }

}
