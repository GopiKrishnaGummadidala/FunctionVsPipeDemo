import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interfaces';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'addtax'
})
export class ProductAddTaxPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) { }
  transform(product: Product): string {
    console.log('addTax pipe called');
    return this.currencyPipe.transform(product.price + (product.price * product.tax), 'USD');
  }
}