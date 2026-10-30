import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Settings {
  // Estado privado para proteger la variable y controlar su acceso
  private darkMode: boolean = false;

  constructor() { }

  // Devuelve si el modo oscuro está activo actualmente
  isDarkMode(): boolean {
    return this.darkMode;
  }

  // Activa o desactiva el modo oscuro y actualiza el DOM de forma inmediata
  setDarkMode(enable: boolean) {
    this.darkMode = enable;
    // Añade o quita la clase 'dark' del body
    document.body.classList.toggle('dark', this.darkMode);
  }

  // Alterna el estado actual
  toggleDarkMode() {
    this.setDarkMode(!this.darkMode);
  }
}