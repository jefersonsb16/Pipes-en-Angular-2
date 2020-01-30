import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cifrarcadena'
})
export class CifrarcadenaPipe implements PipeTransform {

  transform(value: string, state: boolean): any {
    if(state){
      var name = "";
      for (let i = 0; i < value.length; i++) {
        name += '*';
      }
      return name;
    }else{
      return value;
    }
  }

}
