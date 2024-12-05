import { Component } from '@angular/core';
import {Tesoros} from "../../common/interfazZeldaTesoros";
import {TesorosService} from "../../services/tesoros.service";

@Component({
  selector: 'app-tesoros',
  templateUrl: './tesoros.component.html',
  styleUrls: ['./tesoros.component.css']
})
export class TesorosComponent {
  tesoros: Tesoros[] = [];

  constructor( private tesorosservice: TesorosService) {
    this.loadTreasures();
  }

  private loadTreasures() {
    this.tesorosservice.getTreasuresZelda().subscribe({
      next: value => {
        this.tesoros = value.data;
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
