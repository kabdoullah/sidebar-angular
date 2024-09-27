import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @ViewChild('liveToast', { static: true }) liveToast!: ElementRef;

  @Input() message: string = "Hello, world! This is a toast message."; // Message par défaut
  @Input() iconClass: string = "fa-solid fa-circle-check"; // Icône par défaut
  @Input() textClass: string = "text-success"; // Couleur par défaut (succès)

  @Output() toastOpened = new EventEmitter<void>();

  showToast() {
    const toastBootstrap = new bootstrap.Toast(this.liveToast.nativeElement);
    toastBootstrap.show();
    this.toastOpened.emit(); // Émet un événement une fois le toast ouvert
  }
}

