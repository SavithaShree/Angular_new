import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/sharedservices/product.service';
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
  selectedArray = [];
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
  constructor(private productService: ProductService, private router: Router, private cartService: CartService) { }

  cartSum() {
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
    //this.subscribeCart = this.cartSum();
  }
  // selectedCategory(val){
  //   console.log(val);
  //   this.productService.selectCategory(val);
  //   this.router.navigate(['/Category',val]);    
  // }

}
