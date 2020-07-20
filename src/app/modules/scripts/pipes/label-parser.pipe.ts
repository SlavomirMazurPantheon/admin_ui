import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelParser'
})
export class LabelParserPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value
    .split('_')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  }

}
