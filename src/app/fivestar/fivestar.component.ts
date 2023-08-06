import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fivestar',
  templateUrl: './fivestar.component.html',
  styleUrls: ['./fivestar.component.scss']
})
export class FivestarComponent {

  @Input()  size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  arrays : [] | undefined;
  object: {}|undefined;
  objects : Object|undefined;
  arrObj:[Object]|undefined;

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  isColorChange = false;

constructor(){
  setInterval(() => {
      this.isColorChange = !this.isColorChange
  }, 1000);
}


getTheClass(){
  return this.isColorChange?'lineRed':'lineBlue';
}
}
