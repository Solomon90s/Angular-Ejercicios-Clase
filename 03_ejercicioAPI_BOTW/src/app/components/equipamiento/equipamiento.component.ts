import { Component } from '@angular/core';
import {Equipamiento} from "../../common/interfazZeldaEquipamiento";
import {EquipamientoService} from "../../services/equipamiento.service";

@Component({
  selector: 'app-equipamiento',
  templateUrl: './equipamiento.component.html',
  styleUrls: ['./equipamiento.component.css']
})
export class EquipamientoComponent {
  equipamiento: Equipamiento[] = [];

  constructor( private equipamientoservice: EquipamientoService) {
    this.loadEquipment();
  }

  private loadEquipment() {
    this.equipamientoservice.getEquipmentsZelda().subscribe({
      next: value => {
        this.equipamiento = value.data;
        console.log(value);
      },
      error: (err) =>{
        console.error(err);
      },
      complete: () => {
        console.log('Done')
      }
    })
  }
}
