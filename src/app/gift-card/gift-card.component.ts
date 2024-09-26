import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.css'
})
export class GiftCardComponent implements OnInit {
  presetAmounts = [10000, 25000, 50000, 100000];
  selectedAmount: number | null = null;
  customAmount: number | null = null;
  quantity = 1;
  categories = [
    { name: 'Cadeau', image: 'carte_jaune.png' },
    { name: 'Remerciement', image: 'carte_verte.png' },
    { name: 'Anniversaire', image: 'carte_orange.png' },
    { name: 'Naissance', image: 'carte_bleu.png' },
    { name: 'Mariage', image: 'carte_moutarde.png' },
    { name: 'Félicitation', image: 'carte_rouge.png' }
  ];
  selectedCategory: any = null;

  ngOnInit() {
    this.selectedCategory = this.categories[0]; 
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = null;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  addToCart() {
    console.log(`Added to cart: ${this.selectedAmount || this.customAmount} FCFA, Quantity: ${this.quantity}`);
  }

  checkout() {
    console.log('Proceeding to checkout');
  }
}
