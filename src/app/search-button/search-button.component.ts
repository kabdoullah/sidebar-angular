import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-button.component.html',
  styleUrl: './search-button.component.css'
})
export class SearchButtonComponent {
  isExpanded = signal(false); // État initial pour l'expansion

  toggleSearch() {
    this.isExpanded.set(!this.isExpanded()); // Inverse l'état
  }
}
