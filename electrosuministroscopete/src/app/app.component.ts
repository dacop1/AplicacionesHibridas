import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons'; // AÑADIDO
import { eyeOutline, pricetagOutline, cubeOutline } from 'ionicons/icons'; // AÑADIDO

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // AÑADIDO: registramos los iconos que usan las tarjetas
    addIcons({ eyeOutline, pricetagOutline, cubeOutline });
  }
}