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
    this.total = this.cartService.getCartTotal();
  }

  onSubmit(): void {
    this.cartService.clearCart();
    this.cartService.paymentInfo(this.name, this.address, this.total);
    this.router.navigate(['/success']);
    alert(this.name);
  }
}
