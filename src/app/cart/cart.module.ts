import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './sharedservices/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CartModule {
    static forRoot() {
      return {
        NgModule: CartModule,
        providers: [CartService]
      };
    }
}
