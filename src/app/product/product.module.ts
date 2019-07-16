import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartModule } from '../cart/cart.module';
import { CartComponent } from '../cart/cart/cart.component';
 
@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, CartComponent],
  imports: [
    CommonModule,
    CartModule
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductModule { 
  
}
