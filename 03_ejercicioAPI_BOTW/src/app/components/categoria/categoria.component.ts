import {Component} from '@angular/core';
import {ZeldaService} from "../../services/zelda.service";
import {ActivatedRoute} from "@angular/router";
import {DataCategory} from "../../common/InterfazZelda";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  category: string = '';
  dataApi: DataCategory[] = [];

  constructor(private zeldaService: ZeldaService,
    private ar: ActivatedRoute
  ) {
    this.loadCategory();
  }

  /*
   Accedemos a la categoria de manera dinamica
   porque hay distintas categorias y capturamos el parametro de la url
   */
  private loadCategory() {
    this.ar.params.subscribe({
      next: (value) => {
        this.category = value['categoria'];
        this.zeldaService.getCategory(this.category).subscribe({
          next: (res) => {
            this.dataApi = res.data;
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            console.log('Data from category loaded!')
          }
        })
      },
      error: (error) => {
        console.log(error);
      },
    })
  }
}
