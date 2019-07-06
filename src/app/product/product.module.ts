import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailedProductComponent } from './detailed-product/detailed-product.component';
import { CartModule } from '../cart/cart.module';
import { CartComponent } from '../cart/cart/cart.component';
import { CartService } from '../cart/sharedservices/cart.service';
 
@NgModule({
  declarations: [ProductListComponent, DetailedProductComponent, CartComponent],
  imports: [
    CommonModule,
    CartModule
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductModule { 
  
}
