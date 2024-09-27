import { Component, signal, ViewChild } from '@angular/core';
import { ToastComponent } from "../toast/toast.component";

declare var bootstrap: any;

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  @ViewChild('appToast') appToast!: ToastComponent; // Référence au composant enfant

  customMessage: string = 'This is a custom toast message!';
  customIconClass: string = 'fa-solid fa-circle-check';
  customTextClass: string = 'text-success';

  // Fonction parent pour déclencher l'affichage du toast
  openToast() {
    this.appToast.showToast(); // Appel de la méthode showToast du composant enfant
  }
}
