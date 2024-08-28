import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.total = this.cartService.getCartTotal();
  }
}
