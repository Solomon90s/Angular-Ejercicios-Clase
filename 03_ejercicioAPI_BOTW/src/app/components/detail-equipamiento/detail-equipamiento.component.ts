import { Component } from '@angular/core';
import {ApiResultOneEquipamiento} from "../../common/interfazZeldaEquipamiento";
import {ActivatedRoute, Router} from "@angular/router";
import {EquipamientoService} from "../../services/equipamiento.service";

@Component({
  selector: 'app-detail-equipamiento',
  templateUrl: './detail-equipamiento.component.html',
  styleUrls: ['./detail-equipamiento.component.css']
})
export class DetailEquipamientoComponent {
  // Creamos una variable del id del personaje
  id: number = 0;

  // Recogemos el personaje, ! le decimos que lo inicializamos
  equipamiento!: ApiResultOneEquipamiento;

  title = 'Detalles de cada monstruos';

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: EquipamientoService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadEquipment();
  }

  private loadEquipment() {

    // Esta es la manera dinámica
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.id = +value['id'];
        this.dataService.getEquipmentZelda(this.id).subscribe({
          next: data => {
            this.equipamiento = data;
          },
          error: err => {
            console.error(err);
          },
          complete: () => {
            console.log('Char loaded');
          }
        })
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      }
    });
    console.log(this.activatedRoute.snapshot.params);
  }

}
