import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent {
  
  products = [
    {
      title: 'adidas',
      images: [
        'assets/img/rect6.png',
        'assets/img/rect2.png',
        'assets/img/rect3.png'
      ],
      description: 'DAILY 3.0 SHOES',
      price: 98.99,
      quantity: 1,
      currentImageIndex: 0
    },
    
  ];
  

  // Changer l'image vers le modèle suivant
  nextImage(index: number) {
    let product = this.products[index];
    if (product.currentImageIndex < product.images.length - 1) {
      product.currentImageIndex++;
    } else {
      product.currentImageIndex = 0; // Revenir à la première image
    }
  }

  // Changer l'image vers le modèle précédent
  previousImage(index: number) {
    let product = this.products[index];
    if (product.currentImageIndex > 0) {
      product.currentImageIndex--;
    } else {
      product.currentImageIndex = product.images.length - 1; // Aller à la dernière image
    }
  }

  // Fonction pour changer la quantité
  changeQuantity(index: number, amount: number) {
    if (this.products[index].quantity + amount >= 1) {
      this.products[index].quantity += amount;
    }
  }

  // Ajouter au panier
  addToCart(product: any) {
    console.log(`Ajouté au panier: ${product.quantity} x ${product.title}`);
  }
}
