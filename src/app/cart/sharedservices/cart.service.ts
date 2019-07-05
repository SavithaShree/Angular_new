import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService{
    array: object[];
    addToCart(product: object) {
        return this.array.push(product);
    }

}