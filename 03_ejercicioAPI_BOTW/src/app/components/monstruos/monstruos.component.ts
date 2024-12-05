import { Component } from '@angular/core';
import {Monstruos} from "../../common/interfazZeldaMonstruos";
import {ZeldaService} from "../../services/zelda.service";

@Component({
  selector: 'app-monstruos',
  templateUrl: './monstruos.component.html',
  styleUrls: ['./monstruos.component.css']
})
export class MonstruosComponent {

  monstruos: Monstruos[] = [];

  constructor( private zeldaservice: ZeldaService) {
    this.loadMonsters();
  }

  private loadMonsters() {
    this.zeldaservice.getMonstersZelda().subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: value => {
          this.monstruos = value.data;
          console.log(value);
        },
        // El error si algo sale mal
        error: (err) => {
          console.error(err);
        },
        // Aquí si todo ha salido bien
        complete: () => {
          console.log('Done');
        }
      }
    )
  }
}
