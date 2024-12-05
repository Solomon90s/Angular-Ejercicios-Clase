import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DragonballService} from "../../services/dragonball.service";
import {DragonBall} from "../../common/dragonball";

@Component({
  selector: 'app-detail-db',
  templateUrl: './detail-db.component.html',
  styleUrls: ['./detail-db.component.css']
})
export class DetailDbComponent {
  // Creamos una variable del id del personaje
  id: number = 0;

  // Recogemos el personaje, ! le decimos que lo inicializamos
  character!: DragonBall;

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DragonballService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadCharacterDB();
  }

  private loadCharacterDB() {

    // Esta es la manera dinámica
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.id = +value['id'];
        this.dataService.getCharacterDB(this.id).subscribe({
          next: value => {
            this.character = value;
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
