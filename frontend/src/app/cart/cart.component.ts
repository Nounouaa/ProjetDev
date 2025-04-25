import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';  // Assurez-vous que le chemin est correct
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone : true,
  imports : [CommonModule]
})
export class CartComponent {
  cartItems = [
    {
      name: 'Nike',
      description: 'Nike Air Force Premium',
      price: 98.23,
      quantity: 1,
      image: 'https://source.unsplash.com/100x100/?nike'
    },
    {
      name: 'Adidas',
      description: 'DAILY 3.0 SHOES',
      price: 98.23,
      quantity: 1,
      image: 'https://source.unsplash.com/100x100/?adidas'
    }
  ];

  shipping = 20.00;
  tax = 6.00;
  discount = -6.00;

  get subtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get total() {
    return this.subtotal + this.shipping + this.tax + this.discount;
  }

  increment(item: any) {
    item.quantity++;
  }

  decrement(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }
}
