import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal, SimpleChanges } from '@angular/core';
import { SearchButtonComponent } from "../search-button/search-button.component";

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [CommonModule, SearchButtonComponent],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {
  bonsAchat = [
    { reference: '2782992', date: '11/09/2024 14:30', montant: '10 000 FCFA', quantite: 50, maj: '15/09/2024 14:30', statut: 'Actif' },
    { reference: '2782992', date: '11/09/2024 14:30', montant: '25 000 FCFA', quantite: 100, maj: '15/09/2024 14:30', statut: 'Actif' },
    { reference: '2782992', date: '11/09/2024 14:30', montant: '50 000 FCFA', quantite: 200, maj: '15/09/2024 14:30', statut: 'Actif' },
    { reference: '2782992', date: '11/09/2024 14:30', montant: '100 000 FCFA', quantite: 50, maj: '15/09/2024 14:30', statut: 'Actif' }
  ];

  activeButton = signal('all');
  isSearchActive = signal(false); 

  @Input() currentPage: number = 1;
  @Input() totalPages: number = 5;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    this.updatePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage'] || changes['totalPages']) {
      this.updatePages();
    }
  }

  updatePages(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToPage(page: number): void {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }


  formatPageNumber(page: number): string {
    return page < 10 ? '0' + page : '' + page;
  }
  // toggleSearch() {
  //   this.isExpanded.set(!this.isExpanded()); // Inverse l'état
  // }

  setActiveButton(button: string) {
    this.activeButton.set(button);
  }
}
