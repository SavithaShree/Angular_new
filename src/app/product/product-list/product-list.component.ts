import { Component, OnInit } from '@angular/core';
import { List } from '../sharedservices/product.service';
import { CartService } from 'src/app/cart/sharedservices/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedArray: any = [];
  private sendingObject: any = [];
  constructor(private list: List,
    private cartService: CartService,
    private router: Router) {

  }

  ngOnInit() {
    this.selectedArray = this.list.defaultCategory();
  }

  selectCategory(val) {
    this.selectedArray = this.list.selectCategory(val);
  }

  //Sends product details to Cart Service so that it is added in cart
  clickAddToCart(data) {
    this.sendingObject = {
      Product: data.Product,
      Price: data.Price
    }
    data.isFound = true;
    this.cartService.cart(this.sendingObject, 1);
  }

  //Moves to Detailed description page and sends content of selected product to be displayed
  newPage(val) {
    this.router.navigateByUrl('detailedList');
    this.list.detailedPage(val);
  }

}

