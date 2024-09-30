import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CategorySelectorComponent } from "../components/category-selector/category-selector.component";
import { Category } from '../models/category.interface';
import { ToastComponent } from "../toast/toast.component";

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule, FormsModule, CategorySelectorComponent, ToastComponent],
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.css'
})
export class GiftCardComponent implements OnInit {
  presetAmounts = [10000, 25000, 50000, 100000];
  selectedAmount: number | null = null;
  customAmount: number | null = null;
  quantity = 1;
  categories: Category[] = [
    { name: 'Cadeau', image: 'carte_jaune.png' },
    { name: 'Remerciement', image: 'carte_verte.png' },
    { name: 'Anniversaire', image: 'carte_orange.png' },
    { name: 'Naissance', image: 'carte_bleu.png' },
    { name: 'Mariage', image: 'carte_moutarde.png' },
    { name: 'Félicitation', image: 'carte_rouge.png' }
  ];
  selectedCategory: Category | null = null;

  @ViewChild('appToast') appToast!: ToastComponent; // Référence au composant enfant

  customMessage: string = 'This is a custom toast message!';
  customIconClass: string = 'fa-solid fa-circle-check';
  customTextClass: string = 'text-success';

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

  selectCategory(category: Category | null) {
    this.selectedCategory = category;
  }

  addToCart() {
    console.log(`Added to cart: ${this.selectedAmount || this.customAmount} FCFA, Quantity: ${this.quantity}`);
    this.appToast.showToast();
  }

  checkout() {
    console.log('Proceeding to checkout');
  }


}
