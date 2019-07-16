import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProductService } from '../sharedservices/product.service';
import { CartService } from 'src/app/cart/sharedservices/cart.service';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  detailedArray = [];
  sendingObject: object;
  subscribtion: Subscription;

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {
  }

  subscibeFunction() {
    this.productService.detailed.subscribe(val => {
      this.detailedArray = val;
      console.log(this.detailedArray)
    })
    return this.detailedArray;
  }

  ngOnInit() {
    this.subscibeFunction();
  }

  //Sends the Product name and Price of selected product to be added in cart 
  addToCart(val) {
    // val.isFound = !val.isFound
    // this.sendingObject = {
    //   Product: val.Product,
    //   Price: val.Price,
    //   Id: val.id,
    //   toggle: val.isFound
    // }
    this.cartService.addToCart(val);
  }

  //Comes back to Product list page
  backPage(val) {
    this.router.navigate(['/Category',val]);
  }

}
