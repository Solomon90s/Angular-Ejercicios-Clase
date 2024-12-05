import { Component } from '@angular/core';
import {Criaturas} from "../../common/interfazZeldaCriaturas";
import {CriaturasService} from "../../services/criaturas.service";

@Component({
  selector: 'app-criaturas',
  templateUrl: './criaturas.component.html',
  styleUrls: ['./criaturas.component.css']
})
export class CriaturasComponent {
  criaturas: Criaturas[] = [];

  constructor( private criaturasservice: CriaturasService) {
    this.loadCreatures();
  }

  private loadCreatures() {
    this.criaturasservice.getCreaturesZelda().subscribe({
      next: value => {
        this.criaturas = value.data;
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
