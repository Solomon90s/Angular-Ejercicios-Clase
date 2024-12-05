import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../services/games.service";
import {ApiResultEldenRing} from "../../common/games";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  dataApi!: ApiResultEldenRing;

  constructor(private gamesservice: GamesService) {

  }

  ngOnInit(): void {

    this.loadVideoGames();
  }

  private loadVideoGames() {
    this.gamesservice.getVideoGames().subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: (datos: ApiResultEldenRing) => {
          this.dataApi = datos;
          console.log(datos);

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
