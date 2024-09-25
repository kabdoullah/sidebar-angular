import { Component, signal } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  isExpanded = signal<boolean>(false);

  confirmAction(): void {
    console.log('confirmAction' + this.isExpanded());
    this.isExpanded.set(!this.isExpanded());
  }
}
