import { Component } from '@angular/core';
import {ZeldaService} from "../../services/zelda.service";
import {ActivatedRoute} from "@angular/router";
import {DataCategory} from "../../common/InterfazZelda";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  id:number = 0;
  elementData!: DataCategory;

  constructor(private zeldaService: ZeldaService,
              private ar: ActivatedRoute) {
    this.loadDetails();
  }

  private loadDetails() {
    this.ar.params.subscribe({
      next: (value) => {
        this.id = value['id'];
        this.zeldaService.getDetail(this.id).subscribe({
          next: (res) => {
            this.elementData = res.data;
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            console.log('Data loaded')
          }
        })
      },
      error:err => {
        console.error(err);
      }
    })

  }
}
