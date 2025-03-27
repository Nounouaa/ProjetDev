import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';  // Assurez-vous d'importer CartItem
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone : true,
  imports : [CommonModule]
})
export class CheckoutComponent implements OnInit {
  // Déclarez cartItems avec le type explicite CartItem[]
  cartItems: CartItem[] = [];
  subtotal: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Initialisez les propriétés après l'injection du service
    this.cartItems = this.cartService.getItems();
    this.subtotal = this.cartService.getTotal();
    this.total = this.subtotal + 20 + 6; // Ajouter les frais supplémentaires
  }

  confirmPayment() {
    alert('Payment Successful!');
    this.cartService.clearCart();
  }
}
