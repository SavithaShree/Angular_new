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

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.subscibeProductDetail();
  }

  private subscibeProductDetail() {
    this.productService.detailed$.subscribe(val => {
      this.detailedArray.push(val);
    });
  }

  addToCart(val) {
    this.cartService.addToCart(val);
  }

  previousPage(val) {
    this.router.navigate(['/Category', val]);
  }

}
