import { Pipe, PipeTransform } from '@angular/core';
import { reduce } from 'rxjs/operators';

@Pipe({
  name: 'displayGenres'
})
export class DisplayGenresPipe implements PipeTransform {

  transform(value: Array<string>, args?: any): any {
    if (!value) {
      return '';
    }
    return value.reduce((acc, item) => acc + ' ' + '<span class="badge badge-secondary">' + item + '</span>', '');
  }

}
