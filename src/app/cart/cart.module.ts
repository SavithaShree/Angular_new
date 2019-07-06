import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './sharedservices/cart.service';
import { CartComponent } from './cart/cart.component';

//import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ]
  
})
export class CartModule {static forRoot(){
  return{
    NgModule : CartModule,
    providers: [CartService]
  };
} }
