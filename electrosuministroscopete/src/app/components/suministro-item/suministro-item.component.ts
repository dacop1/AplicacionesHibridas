
//CORRECCIÓN 1: Importamos Input desde @angular/core.
// ERROR ANTERIOR: faltaba Input en este import y por eso
// Angular mostraba "Cannot find name 'Input'".
import { Component, Input, OnInit } from '@angular/core';

// Importamos CommonModule para utilizar directivas de Angular
import { CommonModule } from '@angular/common';

// Importamos los componentes de Ionic que usa la plantilla
import {
  IonCard,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular';

// Importamos la interfaz de nuestros suministros
import { Suministroscopete } from '../../interfaces/suministroscopete';

@Component({
  selector: 'app-suministro-item',
  templateUrl: './suministro-item.component.html',
  styleUrls: ['./suministro-item.component.scss'],

  // Indicamos que es un componente independiente
  standalone: true,

  // Componentes y módulos utilizados en el HTML
  // IonCheckbox se ha eliminado porque no se está utilizando.
  // Esto evita el aviso NG8113.
  imports: [
    CommonModule,
    IonCard,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class SuministroItemComponent implements OnInit {

  // CORRECCIÓN 2: Ahora Angular reconocerá este @Input().
  // Permite recibir los datos de un suministro desde HomePage.
  @Input() suministroscopete!: Suministroscopete;

  // Constructor del componente
  constructor() {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {}

  // Método para mostrar los datos del suministro en la consola
  mostrarDetalles() {
    console.log('Datos del suministro:', this.suministroscopete);
  }
}

