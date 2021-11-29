import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timing'
})
export class TimingPipe implements PipeTransform {

  transform(value: Date): string {

    const currentDate =  new Date()
    const createDate = value
    console.log(value);
    console.log(currentDate);
    

    const diff = Math.abs(new Date(currentDate).getTime() - new Date(createDate).getTime());
    console.log(diff);
    return moment.duration(diff, "ms").humanize();
  }

}
