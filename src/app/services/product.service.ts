import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/data.json');
  }

  getProduct(productId: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products) => products.filter((p) => p.id == productId)[0])
    );
  }
}
