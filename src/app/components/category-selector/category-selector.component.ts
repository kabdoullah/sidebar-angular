import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/category.interface';

@Component({
  selector: 'app-category-selector',
  standalone: true,
  imports: [],
  templateUrl: './category-selector.component.html',
  styleUrl: './category-selector.component.css'
})
export class CategorySelectorComponent {
  @Input() categories: Category[] = [];
  @Input() selectedCategory: Category | null = null;

  @Output() selectedCategoryChange = new EventEmitter<any>();

  selectCategory(category: Category) {
    this.selectedCategoryChange.emit(category);
  }
}
