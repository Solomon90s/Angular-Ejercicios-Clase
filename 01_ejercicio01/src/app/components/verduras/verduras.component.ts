import { Component } from '@angular/core';
import { Verdura } from "../../common/Verdura";

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css']
})
export class VerdurasComponent {

  verduras: Verdura [] = [
    {
      nombre: 'Naranja',
      color: 'orange',
      peso: 0.50
    },
    {
      nombre: 'Tomate',
      color: 'red',
      peso: 0.25
    },
    {
      nombre: 'Pera',
      color: 'green',
      peso: 0.35
    }
  ];

  // Creamos un objeto verdura y la inicializamos a vacio. Aqui guardamos la verdura que seleccione
  miVerdura: Verdura =
    {
      nombre: '',
      color: '',
      peso: 0.
    };

  // Creamos la funcion para cargar la verdura en el div
  cargarVerdura(verdura: Verdura) {
    this.miVerdura = verdura;

  }
}
