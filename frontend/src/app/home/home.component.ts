import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  products = [
    {
      image: 'assets/img/product01.png',
      title: 'Off-White',
      description: 'Out of Office "Ooo" sneakers',
      price: 775
    },
    {
      image: 'assets/img/product02.png',
      title: 'Nike',
      description: 'Nike Air Force Premium',
      price: 200
    },
    {
      image: 'assets/img/product03.png',
      title: 'Nike',
      description: 'Nike Air Force Premium',
      price: 98.23
    },
    {
      image: 'assets/img/product04.png',
      title: 'adidas',
      description: 'DAILY 3.0 SHOES',
      price: 98.99
    }
  ];
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.productForm = this.fb.group({
      quantity: [1]
    });
  }

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  addToCart() {
    const quantity = this.productForm.value.quantity;
    this.cartService.addItem({ name: 'Daily 3.0 Shoes', price: 98.99, quantity });
  }
}
