import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
  }

/* transform(value: string): string {
    return value.split('').reverse().join('');
  }*/

}
