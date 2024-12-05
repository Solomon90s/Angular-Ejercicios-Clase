import { Component } from '@angular/core';
import {ApiResultOneMonster, ApiResultZelda, Monstruos} from "../../common/interfazZeldaMonstruos";
import {ActivatedRoute, Router} from "@angular/router";
import {ZeldaService} from "../../services/zelda.service";

@Component({
  selector: 'app-detail-monstruos',
  templateUrl: './detail-monstruos.component.html',
  styleUrls: ['./detail-monstruos.component.css']
})
export class DetailMonstruosComponent {
  // Creamos una variable del id del personaje
  id: number = 0;

  // Recogemos el personaje, ! le decimos que lo inicializamos
  monstruo!: ApiResultOneMonster;

  title = 'Detalles de cada monstruos';

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: ZeldaService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadMonster();
  }

  private loadMonster() {

    // Esta es la manera dinámica
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.id = +value['id'];
        this.dataService.getMonsterZelda(this.id).subscribe({
          next: data => {
            this.monstruo = data;
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

  anterior() {
    if (this.id >= 84) this.router.navigateByUrl('/detail-monstruos/'+(this.id-1));
  }

  siguiente() {
    if (this.id <= 164)this.router.navigateByUrl('/detail-monstruos/'+(this.id+1));
  }

}
