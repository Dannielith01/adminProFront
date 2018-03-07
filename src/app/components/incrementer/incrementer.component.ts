import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent implements OnInit {

  @Input() title: string;
  @Input() progress: number;

  @Output() updateValue: EventEmitter<number> = new EventEmitter();

  @ViewChild('inputProgress') inputProgress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  changeValue( value: number ) {
    this.progress += value;

    this.progress = this._porcentValid( this.progress );

    this.updateValue.emit( this.progress );
  }

  onChangeModel( inputValue: number ) {
    this.progress = this._porcentValid( inputValue );

    this.inputProgress.nativeElement.value = this.progress;
    this.inputProgress.nativeElement.focus();

    this.updateValue.emit( this.progress );

  }

  private _porcentValid( value: number ) {
    if (value <= 0) {
      value = 0;
    } else if (value >= 100) {
      value = 100;
    }
    return value;
  }

}
