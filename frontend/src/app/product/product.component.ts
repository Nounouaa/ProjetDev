import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent {
  products: Product[] = [];
  currentIndex: number = 0;
  quantity = 1;
  
  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    // Récupère les produits depuis le service et initialise la liste
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
  
  // Getter pour obtenir le produit actuellement affiché
  get currentProduct(): Product | undefined {
    return this.products[this.currentIndex];
  }
  
  // Affiche le produit suivant (ou revient au premier si on est à la fin)
  nextProduct(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }
  
  // Affiche le produit précédent (ou revient au dernier si on est au début)
  previousProduct(): void {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }
  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(product: any) {
    alert(`${product.title} ajouté au panier ! Quantité : ${this.quantity}`);
  }
  
}
