import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimDescription'
})
export class TrimDescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    return value.substring(0, 100).trim() + '...';
  }

}
