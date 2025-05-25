import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductScroll } from '../models/productScroll';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient) {}
// product.service.ts
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}

getProductsScroll(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}

}
