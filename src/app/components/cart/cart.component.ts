import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
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
  creditCard: number = 0;
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.getCartTotal();
  }

  onSubmit(): void {
    console.log(this.creditCard);
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

  quantityChange(newValue: NgModel, id: number): void {
    const findProduct = this.products.find((product) => id == product.id);
    if (findProduct) {
      findProduct.quantity = newValue.value;
    }
    this.getCartTotal();
    alert(`${findProduct?.name}'s quantity has changed!`);
  }

  removeProduct(id: number): Product[] {
    alert('The product has been removed!');
    this.products.splice(id - 1, 1);
    this.getCartTotal();
    return this.products;
  }
}
