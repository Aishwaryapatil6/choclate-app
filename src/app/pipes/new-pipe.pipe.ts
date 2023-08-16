import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value: any, compareDate?:Date): any {
    const dateVar = compareDate?new Date(compareDate).getTime():new Date().getTime();  // 
    // const 
    if(value){
      if(value.getTime()-dateVar > 0){
        return "Upcomming event"
      }else if(value.getTime() - dateVar == 0 ){
        return "Today event";
      }else{
        return "event not completed";
      }
          console.log("value:",value)
          return value;
        }
    // return null;
  }

}
