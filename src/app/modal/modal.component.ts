import { Component, Input } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input()
  title!: string;

  openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('addBonModal'));
    myModal.show();
  }

  closeModal() {
    const myModalEl = document.getElementById('addBonModal');
    const modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  }


}
