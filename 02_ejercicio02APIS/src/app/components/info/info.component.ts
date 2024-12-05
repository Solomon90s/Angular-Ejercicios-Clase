import {Component, OnInit} from '@angular/core';
import {ValorantService} from "../../services/valorant.service";
import {InfoApiValorant} from "../../common/interfaceValorant";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // Con la exclamacion le decimos que lo vamos a inicializar
  dataApi!: InfoApiValorant;

  // Vamos a buscar a morty, creamos la variable
  constructor(private valservice:ValorantService) {

  }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.valservice.getCharacters().subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: (datos:InfoApiValorant) => {
          this.dataApi = datos;
          console.log(datos);
        },
        // El error si algo sale mal
        error: err => {
          alert(err.message);
        },
        // Aquí si todo ha salido bien
        complete: () => {
          console.log('Done');
        }
      }
    )
  }
}
