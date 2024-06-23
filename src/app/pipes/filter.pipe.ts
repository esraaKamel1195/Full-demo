import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === "") {
      return value;
    } else {
      const resultArray: any = [];
      for(let server of value) {
        if(server[propName] === filterString ) {
          resultArray.push(server);
        }
      }
      return resultArray;
    }
  }

}
