import {Component} from '@angular/core';
import {ZeldaService} from "../../services/zelda.service";
import {InfoApiZelda, Zelda} from "../../common/zelda";

@Component({
  selector: 'app-zelda',
  templateUrl: './zelda.component.html',
  styleUrls: ['./zelda.component.css']
})
export class ZeldaComponent {
  games: Zelda[] = [];

  constructor(private zeldaservice: ZeldaService) {
    this.loadGames();
  }

  private loadGames() {
    this.zeldaservice.getGames().subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: (value: InfoApiZelda) => {
          this.games = value.data;
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

