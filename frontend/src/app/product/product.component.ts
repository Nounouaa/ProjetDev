import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports : [ReactiveFormsModule]
})
export class ProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.productForm = this.fb.group({
      quantity: [1]
    });
  }

  addToCart() {
    const quantity = this.productForm.value.quantity;
    this.cartService.addItem({ name: 'Daily 3.0 Shoes', price: 98.99, quantity });
  }
}
