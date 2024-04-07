import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl + "/cart"
  private apiUrlCheckout = environment.apiUrl + "/checkout"

  constructor(private httpClient: HttpClient) { }

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  addToCart(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  clearCart(): Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl);
  }

  checkout(cartProducts: Product[]): Observable<void> {
    return this.httpClient.post<void>(this.apiUrlCheckout, cartProducts);
  }
}
