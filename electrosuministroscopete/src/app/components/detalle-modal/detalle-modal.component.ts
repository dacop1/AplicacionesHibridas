import { Component, Input } from '@angular/core';
import { ModalController, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonNote } from '@ionic/angular';
import { Suministroscopete } from '../../interfaces/suministroscopete';


@Component({
  selector: 'app-detalle-modal',
  templateUrl: './detalle-modal.component.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonNote]
})
export class DetalleModalComponent {
  // Dato que recibimos desde la tarjeta
  @Input() suministro!: Suministroscopete;

  constructor(private modalController: ModalController) {}

  // Cierra el modal devolviendo un dato y un rol
  cerrar() {
    this.modalController.dismiss({ leido: true }, 'confirm');
  }
}