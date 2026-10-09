
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORRECCIÓN 1: Importamos los componentes de Ionic desde
// '@ionic/angular', porque el import anterior desde
// '@ionic/angular/standalone' no se encontraba en tu proyecto.
// Si este import también falla, habrá que comprobar tu versión de Ionic.
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular';

// ERROR 2: Antes tenías una ruta parecida a:
// '../components/suministro-item/SuministroItem.component'
// El nombre del archivo y las mayúsculas no coincidían.
//
// CORRECCIÓN: Usamos la ruta del archivo generado:
// suministro-item.component.ts
import { SuministroItemComponent } from '../components/suministro-item/suministro-item.component';

// Importamos la interfaz que define la estructura de cada suministro
import { Suministroscopete } from '../interfaces/suministroscopete';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  // Indicamos los componentes y módulos que utiliza esta página
  standalone: true,

  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    // Componente que muestra cada suministro eléctrico
    SuministroItemComponent, 
    // CORRECCIÓN: Cada elemento del array imports debe separarse con coma.
    CommonModule // Permite utilizar *ngIf y *ngFor
  ]
})
export class HomePage {

  // Array con los suministros eléctricos que mostraremos en pantalla
  listaDeSuministros: Suministroscopete[] = [
    {
      id: 1,
      nombre: 'Cable azul eléctrico 2,5 mm',
      descripcion: 'Cable neutro de 2,5 mm para instalaciones eléctricas',
      categoria: 'Cables',
      marca: 'Prysmian',
      referencia: 'CAB-0025',
      precio: 1.85,
      stock: 125,
      imagen: 'assets/img/Neutro25.jpg'
    },
    {
      id: 2,
      nombre: 'Termico de 20 amperios',
      descripcion: 'Terminco de protección de 20 A',
      categoria: 'Protección eléctrica',
      marca: 'Schneider Electric',
      referencia: 'INT-0016',
      precio: 26.50,
      stock: 30,
      imagen: 'assets/img/Termico20.jpg'
    },
    {
      id: 3,
      nombre: 'Enchufe',
      descripcion: 'Base de enchufe para instalación interior',
      categoria: 'Mecanismos',
      marca: 'Simon',
      referencia: 'ENC-0001',
      precio: 4.75,
      stock: 50,
      imagen: 'assets/img/Enchufe.jpg'
    }
  ];


  // Constructor de la página
  constructor() {}
}

