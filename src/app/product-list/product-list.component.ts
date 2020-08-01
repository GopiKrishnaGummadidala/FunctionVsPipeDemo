import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';
import { DataService } from '../services/data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private dataService: DataService, private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.products$ = this.dataService.getProducts();
  }

  addTax(product: Product): string {
    console.log('addTax() function called');
    return this.currencyPipe.transform(product.price + (product.price * product.tax), 'USD');
  }

}
