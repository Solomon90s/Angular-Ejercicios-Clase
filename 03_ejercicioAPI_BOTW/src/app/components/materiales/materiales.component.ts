import { Component } from '@angular/core';
import {Materials} from "../../common/interfazZeldaMaterials";
import {MaterialesService} from "../../services/materiales.service";

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {
  materials: Materials[] = [];

  constructor( private materialesservice: MaterialesService) {
    this.loadMaterials();
  }

  private loadMaterials() {
    this.materialesservice.getMaterialsZelda().subscribe({
      next: value => {
        this.materials = value.data;
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
