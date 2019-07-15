import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/product/sharedservices/product.service';
import { CartService } from 'src/app/cart/sharedservices/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscribeProduct: Subscription;
  subscribeCart: Subscription;
  selectedArray:any=[];
  cartTotal:number;
  categoryArray=[
    {
    category: "Men"
    },
    {
    category: "Women"
    },
    {
    category: "Kids"
    },
  ]
  constructor(private list: List, private router: Router, private cartService: CartService) { }

  checkFunction() {
    this.cartService.cartSubject.subscribe(array => {
      this.selectedArray = array;
      if (this.selectedArray.length === 0) {
        this.cartTotal = 0;
      }
      this.cartTotal = 0;
      for (let cart of this.selectedArray) {
        this.cartTotal = this.cartTotal + Number(cart.Price)
      }
    })
    return this.selectedArray;
  }

  ngOnInit() {
    this.subscribeCart = this.checkFunction();
  }
  selectedCategory(val){
    alert("hii");
    console.log(val);
    this.router.navigate(['/productList',val]);
    this.list.selectCategory(val);
  }

}
