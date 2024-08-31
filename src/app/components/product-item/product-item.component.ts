import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() ordered: EventEmitter<{ product: Product; quantity: number }> =
    new EventEmitter();
  quantity: number = 1;

  constructor(private cartService: CartService) {
    this.product = { id: 0, name: '', price: 1, category: '' };
  }

  // addToCart(product: Product, quantity: number): void {
  //   this.cartService.addToCart(product, quantity);
  //   alert('Added!');
  // }
}
