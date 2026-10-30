import { Component } from '@angular/core';
import { Settings } from '../../services/settings';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons, IonBackButton,
  IonList, IonListHeader, IonItem, IonLabel, IonToggle
} from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonBackButton,
    IonList, IonListHeader, IonItem, IonLabel, IonToggle
  ]
})
export class AjustesPage {

  // 'public' permite usar settingsService directamente en el HTML
  constructor(public settingsService: Settings) { }

  // Se ejecuta cada vez que el usuario mueve el interruptor
  onToggleChange(event: any) {
    const isChecked = event.detail.checked;
    this.settingsService.setDarkMode(isChecked);
  }
}