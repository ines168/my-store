import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];
  total: number = 0;

  constructor() {}

  addToCart(product: Product, quantity: number) {
    product.quantity = quantity;
    this.cartList.push(product);
    return this.cartList;
  }

  getCart() {
    return this.cartList;
  }

  getCartTotal() {
    this.total = 0;
    for (let product of this.cartList) {
      if (product.quantity) {
        this.total += product.price * product.quantity;
      } else {
        this.total += product.price;
      }
    }
    return this.total;
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}
