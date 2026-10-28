import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { SettingsService } from './services/settings.service'; // AÑADIDO

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private settingsService: SettingsService) {} // AÑADIDO: pedimos el servicio

  // AÑADIDO: se ejecuta una vez al arrancar la app
  async ngOnInit() {
    await this.cargarPreferencias();
  }

  // AÑADIDO: lee el ajuste guardado y activa el modo oscuro si hace falta
  async cargarPreferencias() {
    const modoOscuro = await this.settingsService.get('modo_oscuro');
    if (modoOscuro) {
      document.body.classList.add('dark');
    }
  }
}