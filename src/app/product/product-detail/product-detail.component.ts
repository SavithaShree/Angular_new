import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../shared/product.service';
import { CartService } from '../../cart';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  detailedArray: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {
  }

  subscibeFunction() {
    this.productService.detailed$.subscribe(val => {
      this.detailedArray.push(val)
    })
    // this.cartService.cartSubject$.subscribe(val => {
    //   let checkArray = val;
    //   this.detailedArray = this.productService.checkIfAdded(checkArray, this.detailedArray);
    // })
    return this.detailedArray;
  }

  ngOnInit() {
    this.subscibeFunction();
  }

  //Sends the Product name and Price of selected product to be added in cart 
  addToCart(val) {
    this.cartService.addToCart(val);
  }

  //Comes back to Product list page
  previousPage(val) {
    this.router.navigate(['/Category', val]);
  }

}
