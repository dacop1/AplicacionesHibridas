import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORRECCIÓN 1: Importamos los componentes de Ionic desde
// '@ionic/angular', porque el import anterior desde
// '@ionic/angular/standalone' no se encontraba en tu proyecto.
// Si este import también falla, habrá que comprobar tu versión de Ionic.
import {IonHeader,IonToolbar,IonTitle,IonContent,IonGrid,IonRow,IonCol,IonButtons,IonButton,IonIcon} from '@ionic/angular'; // AÑADIDO: IonButtons, IonButton, IonIcon

// ERROR 2: Antes tenías una ruta parecida a:
// '../components/suministro-item/SuministroItem.component'
// El nombre del archivo y las mayúsculas no coincidían.
// CORRECCIÓN: Usamos la ruta del archivo generado:
// suministro-item.component.ts
import { SuministroItemComponent } from '../components/suministro-item/suministro-item.component';

// Importamos la interfaz que define la estructura de cada suministro
import { Suministroscopete } from '../interfaces/suministroscopete';

import { RouterLink } from '@angular/router';              // AÑADIDO
import { addIcons } from 'ionicons';                       // AÑADIDO
import { settingsOutline } from 'ionicons/icons';          // AÑADIDO

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
    IonGrid, // AÑADIDO3.2
    IonRow,  // AÑADIDO3.2
    IonCol,  // AÑADIDO3.2
    IonButtons, // AÑADIDO
    IonButton,  // AÑADIDO
    IonIcon,     // AÑADIDO
    RouterLink, // Añadido

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
      imagen: 'assets/img/CableNeutro25.jpg'
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
    },

    // ---------- Cables ----------
    { id: 4, nombre: 'Cable rojo eléctrico 2,5 mm', descripcion: 'Cable de fase de 2,5 mm para instalaciones eléctricas', categoria: 'Cables', marca: 'Prysmian', referencia: 'CAB-0026', precio: 1.85, stock: 110, imagen: 'assets/img/Rojo25.jpg' },
    { id: 5, nombre: 'Cable marrón eléctrico 2,5 mm', descripcion: 'Cable de fase de 2,5 mm color marrón', categoria: 'Cables', marca: 'Prysmian', referencia: 'CAB-0027', precio: 1.85, stock: 95, imagen: 'assets/img/Marron25.jpg' },
    { id: 6, nombre: 'Cable tierra verde-amarillo 2,5 mm', descripcion: 'Cable de toma de tierra de 2,5 mm', categoria: 'Cables', marca: 'Prysmian', referencia: 'CAB-0028', precio: 1.90, stock: 100, imagen: 'assets/img/Tierra25.jpg' },
    { id: 7, nombre: 'Cable azul eléctrico 1,5 mm', descripcion: 'Cable neutro de 1,5 mm para circuitos de alumbrado', categoria: 'Cables', marca: 'Prysmian', referencia: 'CAB-0015', precio: 1.20, stock: 150, imagen: 'assets/img/Neutro15.jpg' },
    { id: 8, nombre: 'Cable negro eléctrico 1,5 mm', descripcion: 'Cable de fase de 1,5 mm color negro', categoria: 'Cables', marca: 'Prysmian', referencia: 'CAB-0016', precio: 1.20, stock: 140, imagen: 'assets/img/Negro15.jpg' },
    { id: 9, nombre: 'Cable azul eléctrico 6 mm', descripcion: 'Cable de 6 mm para cocinas y circuitos de mayor potencia', categoria: 'Cables', marca: 'Prysmian', referencia: 'CAB-0060', precio: 3.40, stock: 60, imagen: 'assets/img/Azul6.jpg' },
    { id: 10, nombre: 'Manguera 3x1,5 mm', descripcion: 'Manguera de tres hilos de 1,5 mm, precio por metro', categoria: 'Cables', marca: 'Nexans', referencia: 'CAB-0315', precio: 2.10, stock: 200, imagen: 'assets/img/Manguera315.jpg' },
    { id: 11, nombre: 'Manguera 3x2,5 mm', descripcion: 'Manguera de tres hilos de 2,5 mm, precio por metro', categoria: 'Cables', marca: 'Nexans', referencia: 'CAB-0325', precio: 3.15, stock: 180, imagen: 'assets/img/Manguera325.jpg' },
    { id: 12, nombre: 'Cable coaxial TV 75 ohmios', descripcion: 'Cable coaxial para antena de televisión, precio por metro', categoria: 'Cables', marca: 'Televes', referencia: 'CAB-0075', precio: 0.95, stock: 250, imagen: 'assets/img/Coaxial.jpg' },
    { id: 13, nombre: 'Cable de red UTP Cat6', descripcion: 'Cable de red Cat6 para instalaciones de datos, precio por metro', categoria: 'Cables', marca: 'Nexans', referencia: 'CAB-0600', precio: 0.80, stock: 300, imagen: 'assets/img/UTPCat6.jpg' },

    // ---------- Protección eléctrica ----------
    { id: 14, nombre: 'Térmico de 10 amperios', descripcion: 'Magnetotérmico de protección de 10 A', categoria: 'Protección eléctrica', marca: 'Schneider Electric', referencia: 'INT-0010', precio: 22.90, stock: 35, imagen: 'assets/img/Termico10.jpg' },
    { id: 15, nombre: 'Térmico de 16 amperios', descripcion: 'Magnetotérmico de protección de 16 A', categoria: 'Protección eléctrica', marca: 'Schneider Electric', referencia: 'INT-0017', precio: 24.50, stock: 40, imagen: 'assets/img/Termico16.jpg' },
    { id: 16, nombre: 'Térmico de 25 amperios', descripcion: 'Magnetotérmico de protección de 25 A', categoria: 'Protección eléctrica', marca: 'Schneider Electric', referencia: 'INT-0025', precio: 28.90, stock: 25, imagen: 'assets/img/Termico25.jpg' },
    { id: 17, nombre: 'Térmico de 32 amperios', descripcion: 'Magnetotérmico de protección de 32 A', categoria: 'Protección eléctrica', marca: 'Schneider Electric', referencia: 'INT-0032', precio: 33.50, stock: 20, imagen: 'assets/img/Termico32.jpg' },
    { id: 18, nombre: 'Diferencial 25 A 30 mA', descripcion: 'Interruptor diferencial de 25 A y sensibilidad 30 mA', categoria: 'Protección eléctrica', marca: 'ABB', referencia: 'DIF-0025', precio: 48.50, stock: 18, imagen: 'assets/img/Diferencial25.jpg' },
    { id: 19, nombre: 'Diferencial 40 A 30 mA', descripcion: 'Interruptor diferencial de 40 A y sensibilidad 30 mA', categoria: 'Protección eléctrica', marca: 'ABB', referencia: 'DIF-0040', precio: 55.00, stock: 15, imagen: 'assets/img/Diferencial40.jpg' },
    { id: 20, nombre: 'Protector contra sobretensiones', descripcion: 'Protector de sobretensiones transitorias para cuadro eléctrico', categoria: 'Protección eléctrica', marca: 'Schneider Electric', referencia: 'SOB-0001', precio: 89.90, stock: 8, imagen: 'assets/img/Sobretensiones.jpg' },
    { id: 21, nombre: 'Caja de distribución 12 módulos', descripcion: 'Cuadro de superficie con puerta para 12 módulos', categoria: 'Protección eléctrica', marca: 'Hager', referencia: 'CAJ-0012', precio: 14.50, stock: 22, imagen: 'assets/img/Caja12.jpg' },

    // ---------- Mecanismos ----------
    { id: 22, nombre: 'Interruptor simple', descripcion: 'Interruptor unipolar para instalación interior', categoria: 'Mecanismos', marca: 'Simon', referencia: 'MEC-0001', precio: 3.20, stock: 80, imagen: 'assets/img/Interruptor.jpg' },
    { id: 23, nombre: 'Conmutador', descripcion: 'Conmutador para controlar un punto de luz desde dos sitios', categoria: 'Mecanismos', marca: 'Simon', referencia: 'MEC-0002', precio: 4.10, stock: 70, imagen: 'assets/img/Conmutador.jpg' },
    { id: 24, nombre: 'Pulsador', descripcion: 'Pulsador para timbre o temporizador de escalera', categoria: 'Mecanismos', marca: 'Simon', referencia: 'MEC-0004', precio: 3.95, stock: 60, imagen: 'assets/img/Pulsador.jpg' },
    { id: 25, nombre: 'Enchufe schuko doble', descripcion: 'Base de enchufe doble con toma de tierra lateral', categoria: 'Mecanismos', marca: 'Legrand', referencia: 'ENC-0002', precio: 8.90, stock: 45, imagen: 'assets/img/EnchufeDoble.jpg' },
    { id: 26, nombre: 'Enchufe con cargador USB', descripcion: 'Base de enchufe con dos puertos USB integrados', categoria: 'Mecanismos', marca: 'Legrand', referencia: 'ENC-0003', precio: 14.90, stock: 28, imagen: 'assets/img/EnchufeUSB.jpg' },
    { id: 27, nombre: 'Base de TV', descripcion: 'Toma de antena de televisión para instalación interior', categoria: 'Mecanismos', marca: 'Simon', referencia: 'TV-0001', precio: 5.60, stock: 40, imagen: 'assets/img/BaseTV.jpg' },
    { id: 28, nombre: 'Base de datos RJ45', descripcion: 'Toma de red RJ45 Cat6 para instalación interior', categoria: 'Mecanismos', marca: 'Simon', referencia: 'RJ-0001', precio: 9.80, stock: 35, imagen: 'assets/img/BaseRJ45.jpg' },
    { id: 29, nombre: 'Marco de 1 elemento', descripcion: 'Marco embellecedor para un mecanismo', categoria: 'Mecanismos', marca: 'Simon', referencia: 'MAR-0001', precio: 2.30, stock: 90, imagen: 'assets/img/Marco1.jpg' },
    { id: 30, nombre: 'Marco de 2 elementos', descripcion: 'Marco embellecedor para dos mecanismos', categoria: 'Mecanismos', marca: 'Simon', referencia: 'MAR-0002', precio: 3.40, stock: 65, imagen: 'assets/img/Marco2.jpg' },
    { id: 31, nombre: 'Regulador de luz', descripcion: 'Regulador giratorio para lámparas LED regulables', categoria: 'Mecanismos', marca: 'Niessen', referencia: 'MEC-0006', precio: 24.50, stock: 14, imagen: 'assets/img/Regulador.jpg' },
    { id: 32, nombre: 'Detector de movimiento', descripcion: 'Interruptor con sensor de presencia para interior', categoria: 'Mecanismos', marca: 'Legrand', referencia: 'MEC-0007', precio: 28.90, stock: 12, imagen: 'assets/img/Detector.jpg' },

    // ---------- Iluminación ----------
    { id: 33, nombre: 'Bombilla LED E27 10 W', descripcion: 'Bombilla LED de rosca gruesa, luz cálida', categoria: 'Iluminación', marca: 'Philips', referencia: 'ILU-0001', precio: 2.95, stock: 120, imagen: 'assets/img/LedE27.jpg' },
    { id: 34, nombre: 'Bombilla LED E14 5 W', descripcion: 'Bombilla LED de rosca fina, luz cálida', categoria: 'Iluminación', marca: 'Philips', referencia: 'ILU-0002', precio: 2.40, stock: 110, imagen: 'assets/img/LedE14.jpg' },
    { id: 35, nombre: 'Bombilla LED GU10 5 W', descripcion: 'Bombilla LED dicroica para focos empotrables', categoria: 'Iluminación', marca: 'Osram', referencia: 'ILU-0003', precio: 3.10, stock: 100, imagen: 'assets/img/LedGU10.jpg' },
    { id: 36, nombre: 'Tubo LED 120 cm 18 W', descripcion: 'Tubo LED T8 de 120 cm, luz fría', categoria: 'Iluminación', marca: 'Ledvance', referencia: 'ILU-0004', precio: 6.90, stock: 55, imagen: 'assets/img/TuboLed.jpg' },
    { id: 37, nombre: 'Panel LED 60x60 40 W', descripcion: 'Panel LED cuadrado empotrable para techo', categoria: 'Iluminación', marca: 'Ledvance', referencia: 'ILU-0005', precio: 29.90, stock: 24, imagen: 'assets/img/PanelLed.jpg' },
    { id: 38, nombre: 'Downlight LED empotrable 12 W', descripcion: 'Foco LED redondo para empotrar en falso techo', categoria: 'Iluminación', marca: 'Philips', referencia: 'ILU-0006', precio: 8.95, stock: 48, imagen: 'assets/img/Downlight.jpg' },
    { id: 39, nombre: 'Proyector LED exterior 50 W', descripcion: 'Foco proyector LED para exterior con protección IP65', categoria: 'Iluminación', marca: 'Osram', referencia: 'ILU-0007', precio: 19.90, stock: 18, imagen: 'assets/img/Proyector50.jpg' },
    { id: 40, nombre: 'Regleta estanca LED 120 cm', descripcion: 'Pantalla estanca LED para garajes y exteriores', categoria: 'Iluminación', marca: 'Ledvance', referencia: 'ILU-0008', precio: 17.50, stock: 30, imagen: 'assets/img/Estanca.jpg' },
    { id: 41, nombre: 'Plafón LED 24 W', descripcion: 'Plafón LED de superficie para techo', categoria: 'Iluminación', marca: 'Philips', referencia: 'ILU-0009', precio: 15.90, stock: 26, imagen: 'assets/img/Plafon.jpg' },
    { id: 42, nombre: 'Tira LED 5 m 12 V', descripcion: 'Tira LED adhesiva de 5 metros, luz blanca', categoria: 'Iluminación', marca: 'Osram', referencia: 'ILU-0010', precio: 12.90, stock: 32, imagen: 'assets/img/TiraLed.jpg' },

    // ---------- Canalización ----------
    { id: 43, nombre: 'Tubo corrugado 20 mm', descripcion: 'Rollo de 100 m de tubo corrugado para empotrar', categoria: 'Canalización', marca: 'Pemsa', referencia: 'CAN-0020', precio: 18.90, stock: 20, imagen: 'assets/img/Tubo20.jpg' },
    { id: 44, nombre: 'Tubo corrugado 25 mm', descripcion: 'Rollo de 100 m de tubo corrugado para empotrar', categoria: 'Canalización', marca: 'Pemsa', referencia: 'CAN-0025', precio: 24.50, stock: 16, imagen: 'assets/img/Tubo25.jpg' },
    { id: 45, nombre: 'Canaleta 60x40 mm', descripcion: 'Canaleta de PVC blanca de 2 metros', categoria: 'Canalización', marca: 'Unex', referencia: 'CAN-0640', precio: 4.80, stock: 60, imagen: 'assets/img/Canaleta6040.jpg' },
    { id: 46, nombre: 'Caja de registro 100x100', descripcion: 'Caja de registro de superficie con tapa', categoria: 'Canalización', marca: 'Pemsa', referencia: 'CAN-0100', precio: 1.60, stock: 85, imagen: 'assets/img/Registro100.jpg' },
    { id: 47, nombre: 'Caja de empotrar universal (pack 10)', descripcion: 'Pack de 10 cajas universales para mecanismos', categoria: 'Canalización', marca: 'Pemsa', referencia: 'CAJ-0100', precio: 4.50, stock: 70, imagen: 'assets/img/CajaEmpotrar.jpg' },

    // ---------- Herramientas y accesorios ----------
    { id: 48, nombre: 'Pelacables automático', descripcion: 'Herramienta para pelar cables de 0,2 a 6 mm', categoria: 'Herramientas', marca: 'Klein Tools', referencia: 'HER-0001', precio: 18.90, stock: 15, imagen: 'assets/img/Pelacables.jpg' },
    { id: 49, nombre: 'Multímetro digital', descripcion: 'Multímetro para medir tensión, corriente y continuidad', categoria: 'Herramientas', marca: 'Fluke', referencia: 'HER-0004', precio: 129.00, stock: 6, imagen: 'assets/img/Multimetro.jpg' },
    { id: 50, nombre: 'Regletas de conexión (pack 10)', descripcion: 'Conectores rápidos de palanca para 3 cables', categoria: 'Accesorios', marca: 'Wago', referencia: 'ACC-0002', precio: 6.50, stock: 90, imagen: 'assets/img/Regletas.jpg' }
  ];


  // Constructor de la página
  constructor() {
    addIcons({ settingsOutline }); // AÑADIDO: registra el icono de engranaje
  }
}

