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
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; // Spécifiez le type explicite

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Initialiser cartItems après l'injection du service
    this.cartItems = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems(); // Mettre à jour les éléments après la suppression
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
