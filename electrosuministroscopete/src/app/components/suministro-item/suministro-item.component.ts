import { Component, Input, OnInit } from '@angular/core';
// Importamos CommonModule para utilizar directivas de Angular
import { CommonModule } from '@angular/common';
// Importamos los componentes de Ionic que usa la plantilla
import {IonCard,IonItem,IonLabel,IonButton,IonCheckbox} from '@ionic/angular';
// Importamos la interfaz de nuestros suministros
import { Suministroscopete } from '../../interfaces/suministroscopete';


@Component({
  selector: 'app-suministro-item',
  templateUrl: './suministro-item.component.html',
  styleUrls: ['./suministro-item.component.scss'],
  // Indicamos que es un componente independiente
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonItem,
    IonLabel,
    IonButton,
    IonCheckbox //3.2 para poder usar <ion-checkbox> en el HTML
  ]
})
export class SuministroItemComponent implements OnInit {
  @Input() suministroscopete!: Suministroscopete;
    // AÑADIDO3.2: guarda si este elemento está marcado
  seleccionado = false;
  // Constructor del componente
  constructor() {}
  // Método que se ejecuta al inicializar el componente
  ngOnInit() {}
  // Método para mostrar los datos del suministro en la consola
  mostrarDetalles() {
    console.log('Datos del suministro:', this.suministroscopete);
  }

  // AÑADIDO 3.2: se ejecuta cuando el usuario marca o desmarca el checkbox
  cambiarSeleccion(event: any) {
    this.seleccionado = event.detail.checked;
    console.log(this.suministroscopete.nombre, 'seleccionado:', this.seleccionado);
  }
}

