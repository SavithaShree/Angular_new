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
  private subscribtion: Subscription;

  constructor(private list: List,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.subscribtion = this.list.detailed.subscribe(val => {
      this.detailedArray = val
    })
    console.log("DetailedArray", this.detailedArray);

  }

  //Sends the Product name and Price of selected product to be added in cart 
  clickAddToCart(val1, val2) {
    this.sendingObject = {
      Product: val1,
      Price: val2
    }

    this.cartService.cart(this.sendingObject, 1);
  }

  //Comes back to Product list page
  backPage() {
    this.router.navigateByUrl('/productList');
  }
}
