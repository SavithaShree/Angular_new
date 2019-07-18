import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/shared/cart.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  toggle: boolean;
  selectArray = [];
  productList: any[] = [];
  param: any;
  constructor(private productService: ProductService, private cartService: CartService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.param = param
      console.log("param", this.param)
      this.productList = this.productService.listArray;
      if (this.productList.length == 0) {
        this.productService.getJSON().subscribe(data => {
          this.productList = data;
          this.selectArray = this.productList.filter(val => val.Category === this.param.category);
        });
      }
    });
  }

  //Sends product details to Cart Service so that it is added in cart
  addToCart(data) {
    this.cartService.addToCart(data);
  }

  //Moves to Detailed description page and sends content of selected product to be displayed
  newPage(val) {
    console.log(val);
    this.router.navigateByUrl('About');
    this.productService.detailedPage(val);
  }

}
