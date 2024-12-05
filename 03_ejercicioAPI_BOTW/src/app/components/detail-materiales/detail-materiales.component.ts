import { Component } from '@angular/core';
import {ApiOneMaterial} from "../../common/interfazZeldaMaterials";
import {ActivatedRoute, Router} from "@angular/router";
import {MaterialesService} from "../../services/materiales.service";

@Component({
  selector: 'app-detail-materiales',
  templateUrl: './detail-materiales.component.html',
  styleUrls: ['./detail-materiales.component.css']
})
export class DetailMaterialesComponent {
  // Creamos una variable del id del personaje
  id: number = 0;

  // Recogemos el personaje, ! le decimos que lo inicializamos
  material!: ApiOneMaterial;

  title = 'Detalles de cada monstruos';

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: MaterialesService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadMaterial();
  }

  private loadMaterial() {

    // Esta es la manera dinámica
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.id = +value['id'];
        this.dataService.getMaterialZelda(this.id).subscribe({
          next: data => {
            this.material = data;
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
