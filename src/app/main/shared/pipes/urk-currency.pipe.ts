import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ukrCurrency'
})
export class UkrCurrencyPipe implements PipeTransform {
  transform(value: number | undefined, digitsInfo: string = '1.2-2'): string {
    if (!value) {
      return '';
    }
    const transformedCurrency = new CurrencyPipe('en', 'USD')
    .transform(value, '', '', digitsInfo)?.replaceAll('\,', ' ').replaceAll('\.', ',');
    return transformedCurrency ? transformedCurrency : '';
  }
}