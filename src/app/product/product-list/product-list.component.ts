import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/sharedservices/cart.service';
import { List } from '../sharedservices/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  toggle: boolean;
  selectArray: any;
  subscriber: Subscription;
  private sendingObject: any = [];
  constructor(private list: List, private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.selectArray = this.list.homeSubject.subscribe(val =>{
      console.log(val);
      this.selectArray=val});
    //this.selectArray = this.list.defaultCategory();
  }
  
   
  //Sends product details to Cart Service so that it is added in cart
  clickAddToCart(data) {
    this.sendingObject = {
      Product: data.Product,
      Price: data.Price,
      Id : data.id,
    }
    this.cartService.addToCart(this.sendingObject);
  }

  //Moves to Detailed description page and sends content of selected product to be displayed
  newPage(val) {
    this.router.navigateByUrl('detailedList');
    this.list.detailedPage(val);
  }

}

