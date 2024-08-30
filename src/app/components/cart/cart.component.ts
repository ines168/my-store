import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [];
  total: number = 0;
  name: string = '';
  address: string = '';
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.getCartTotal();
  }

  onSubmit(): void {
    this.cartService.clearCart();
    this.cartService.paymentInfo(this.name, this.address, this.total);
    this.router.navigate(['/success']);
  }

  getCartTotal() {
    this.total = 0;
    for (let product of this.products) {
      if (product.quantity) {
        this.total += product.price * product.quantity;
      } else {
        this.total += product.price;
      }
    }
    this.total = Math.round(this.total * 100) / 100;
    return this.total;
  }

  quantityChange(newValue: string, id: number): void {
    const findProduct = this.products.find((product) => id == product.id);
    if (findProduct) {
      findProduct.quantity = parseInt(newValue);
    }
    this.getCartTotal();
  }
}
