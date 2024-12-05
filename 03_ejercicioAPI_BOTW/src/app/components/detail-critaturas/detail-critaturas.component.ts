import { Component } from '@angular/core';
import {ApiResultOneCreature} from "../../common/interfazZeldaCriaturas";
import {ActivatedRoute, Router} from "@angular/router";
import {CriaturasService} from "../../services/criaturas.service";

@Component({
  selector: 'app-detail-critaturas',
  templateUrl: './detail-critaturas.component.html',
  styleUrls: ['./detail-critaturas.component.css']
})
export class DetailCritaturasComponent {
  // Creamos una variable del id del personaje
  id: number = 0;

  // Recogemos el personaje, ! le decimos que lo inicializamos
  criatura!: ApiResultOneCreature;

  title = 'Detalles de cada monstruos';

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: CriaturasService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadCreature();
  }

  private loadCreature() {

    // Esta es la manera dinámica
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.id = +value['id'];
        this.dataService.getCreatureZelda(this.id).subscribe({
          next: data => {
            this.criatura = data;
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
