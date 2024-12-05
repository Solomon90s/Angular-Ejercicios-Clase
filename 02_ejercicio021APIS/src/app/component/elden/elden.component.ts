import {Component, OnInit} from '@angular/core';
import {EldenRingService} from "../../services/eldenRing.service";
import {ApiResultEldenRing} from "../../common/eldenRingInterfaz";

@Component({
  selector: 'app-elden',
  templateUrl: './elden.component.html',
  styleUrls: ['./elden.component.css']
})
export class EldenComponent {

  dataApi!: ApiResultEldenRing;

  page: number = 0;
  limit: number = 20;

  constructor(private gamesservice: EldenRingService) {
    this.loadBossesEldenRing();
  }


  loadBossesEldenRing() {
    this.gamesservice.getBossesPagination(this.limit, this.page).subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: (datos: ApiResultEldenRing) => {
          this.dataApi = datos;
          console.log(datos);
        },
        // El error si algo sale mal
        error: (err) => {
          alert(err.message);
        },
        // Aquí si todo ha salido bien
        complete: () => {
          console.log('Done se ha completado la carga');
        }
      }
    )
  }

}
