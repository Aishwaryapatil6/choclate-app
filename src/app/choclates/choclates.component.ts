import { Component } from '@angular/core';

@Component({
  selector: 'app-choclates',
  templateUrl: './choclates.component.html',
  styleUrls: ['./choclates.component.scss']
})
export class ChoclatesComponent {
  
childVar=[1,2,3,4];
  childinparent:any|undefined;
viewVar(newValue:any){
  this.childVar.push(newValue)
  console.log(this.childVar)
}
    
}
