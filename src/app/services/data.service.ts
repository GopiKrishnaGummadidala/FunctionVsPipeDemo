import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] =  [
    {
      id: 1,
      name: 'Trimmer',
      price: 15.19,
      tax: 0.02
    },
    {
      id: 2,
      name: 'Mobile',
      price: 849.99,
      tax: 0.03
    },
    {
      id: 3,
      name: 'Lappy 1',
      price: 1009.99,
      tax: 0.02
    }
  ];

  constructor() { }

  getProducts() : Observable<Product[]> {
    return of(this.products);
  }
}
