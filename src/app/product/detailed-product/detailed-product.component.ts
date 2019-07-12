import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { List } from '../sharedservices/product.service';
import { CartService } from 'src/app/cart/sharedservices/cart.service';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.css']
})
export class DetailedProductComponent implements OnInit {
  detailedArray: any = [];
  sendingObject: object;
  subscribtion: Subscription;

  constructor(private list: List, private cartService: CartService, private router: Router) {
  }

  subscibeFunction(){
    this.list.detailed.subscribe(val => {
      this.detailedArray = val;
      console.log(this.detailedArray)
    })
    return this.detailedArray;
  }

  ngOnInit() {
    this.subscribtion = this.subscibeFunction();
  }

  //Sends the Product name and Price of selected product to be added in cart 
  clickAddToCart(val) {
    val.isFound= !val.isFound
    this.sendingObject = {
      Product: val.Product,
      Price: val.Price,
      Id: val.id,
      toggle: val.isFound
    }
    this.cartService.addToCart(this.sendingObject);
  }

  //Comes back to Product list page
  backPage() {
    this.router.navigateByUrl('/productList');
  }
}
