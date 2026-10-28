import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingsService } from 'src/app/services/settings.service';
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
    IonList, IonListHeader, IonItem, IonLabel, IonToggle,
    FormsModule
  ]
})
export class AjustesPage implements OnInit {

  modoOscuro: boolean = false; // Valor por defecto

  constructor(private settingsService: SettingsService) { }

  async ngOnInit() {
    // Cargamos el valor guardado; si no existe (primera vez) usamos false
    this.modoOscuro = await this.settingsService.get('modo_oscuro') || false;
    this.aplicarTema(this.modoOscuro);
  }

  async cambiarModoOscuro() {
    // 1. Guardamos el nuevo valor
    await this.settingsService.set('modo_oscuro', this.modoOscuro);
    // 2. Aplicamos el cambio visualmente
    this.aplicarTema(this.modoOscuro);
  }

  aplicarTema(esOscuro: boolean) {
    // Añade o quita la clase 'dark' en el body; los estilos están en variables.scss
    document.body.classList.toggle('dark', esOscuro);
  }
}