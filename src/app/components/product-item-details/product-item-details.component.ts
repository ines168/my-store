import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent {
  productId: number = 0;
  product: Product = { id: 0, name: '', price: 1, category: '' };
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.productService
      .getProduct(this.productId)
      .subscribe((res) => (this.product = res));
  }

  addToCart(product: Product, quantity: number): void {
    this.cartService.addToCart(product, quantity);
    alert('Added!');
  }
}
