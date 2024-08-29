import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  lastOrder: Order = { fullName: '', total: 0, address: '' };
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    let order = this.cartService.getPaymentInfo();
    this.lastOrder = order[0];
  }
}
