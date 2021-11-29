import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(index: number): any {

    let suffix = 'th';

      let j = index % 10,
          k = index % 100;
      if (j == 1 && k != 11) {
        suffix = "st";
      } else if (j == 2 && k != 12) {
        suffix = "nd";
      } else if (j == 3 && k != 13) {
        suffix = "rd";
      }
      return index  + suffix
  }

}
