import { Component } from '@angular/core';
import {ApiOneTesoro} from "../../common/interfazZeldaTesoros";
import {ActivatedRoute, Router} from "@angular/router";
import {TesorosService} from "../../services/tesoros.service";

@Component({
  selector: 'app-detail-tesoros',
  templateUrl: './detail-tesoros.component.html',
  styleUrls: ['./detail-tesoros.component.css']
})
export class DetailTesorosComponent {
  // Creamos una variable del id del personaje
  id: number = 0;

  // Recogemos el personaje, ! le decimos que lo inicializamos
  tesoro!: ApiOneTesoro;

  title = 'Detalles de cada monstruos';

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: TesorosService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadTreasure();
  }

  private loadTreasure() {

    // Esta es la manera dinámica
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.id = +value['id'];
        this.dataService.getTreasureZelda(this.id).subscribe({
          next: data => {
            this.tesoro = data;
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
