import {Component} from '@angular/core';
import {DragonBall, InfoDragonBall} from "../../common/dragonball";
import {DragonballService} from "../../services/dragonball.service";

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball.component.html',
  styleUrls: ['./dragonball.component.css']
})
export class DragonballComponent {
  characters!: InfoDragonBall;

  // Creamos la variable de la página actual, que empieza en la 1. Es la pagina inicial
  page: number = 1;

  pageSize: number = 12;

  constructor(private dragonballservice: DragonballService) {
    this.loadCharacters();
  }

  loadCharacters() {
    this.dragonballservice.getCharacterPagination(this.page, this.pageSize).subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: (value: InfoDragonBall) => {
          this.characters = value;
          console.log(value);

        },
        // El error si algo sale mal
        error: (err) => {
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
