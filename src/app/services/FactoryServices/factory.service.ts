import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {
  factoryData: any;
  constructor() { }

  add(msg:string){
  this.factoryData.push(msg);
  }
}
