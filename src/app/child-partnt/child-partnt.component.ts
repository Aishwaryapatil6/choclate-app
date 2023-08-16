import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FactoryService } from '../services/FactoryServices/factory.service';

@Component({
  selector: 'app-child-partnt',
  templateUrl: './child-partnt.component.html',
  styleUrls: ['./child-partnt.component.scss']
})
export class ChildPartntComponent {

@Output() newVar = new EventEmitter<string>();
@Input()child = "child"
constructor(public fs:FactoryService){
  let messageInChild = this.fs.add("message from child-parent")
  console.log("messageInChild",messageInChild)
}


newvar(value:string){
  this.newVar.emit(value)
}
}
