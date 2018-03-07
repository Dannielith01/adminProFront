import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  blueProgress: number = 20;
  greenProgress: number = 40;
  constructor() { }

  ngOnInit() {
  }

}
