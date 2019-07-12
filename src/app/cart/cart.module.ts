import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        providers: []
      };
    }
}
