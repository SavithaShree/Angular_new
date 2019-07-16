import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/sharedservices/cart.service';
import { ProductService } from '../sharedservices/product.service';

@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  toggle: boolean;
  selectArray = [];
  productList = [];
  param;
  constructor(private productService: ProductService, private cartService: CartService, private router: Router, private route: ActivatedRoute) {
  }

  getValue(){

  }

  ngOnInit() {
    this.route.params.subscribe(param => {this.param=param
      console.log("param",this.param)});
    this.productService.getJSON().subscribe(data => {
      this.productList = data;
      console.log("list",this.productList)
      // this.selectArray=this.productService.selectCategory(this.param, this.productList)
      // console.log(this.selectArray)
      this.getValue();
  });
  
      // this.productService.homeSubject.subscribe(val =>{
      //   console.log(val);
      //   this.selectArray=val});
    //this.selectArray = this.productService.defaultCategory();
  }
  
   
  //Sends product details to Cart Service so that it is added in cart
  addToCart(data) {
    this.cartService.addToCart(data);
  }

  //Moves to Detailed description page and sends content of selected product to be displayed
  newPage(val) {
    this.router.navigateByUrl('About');
    this.productService.detailedPage(val);
  }

}

