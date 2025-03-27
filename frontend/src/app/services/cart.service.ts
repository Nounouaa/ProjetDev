import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model'; // Import de l'interface

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = []; // Utilisation de l’interface

  addItem(item: CartItem) {
    this.cart.push(item);
  }

  getItems(): CartItem[] {
    return this.cart;
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
