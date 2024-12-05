import {Component} from '@angular/core';
import {InfoApiSouthPark, SouthPark} from "../../common/southpark";
import {SouthparkService} from "../../services/southpark.service";

@Component({
  selector: 'app-southpark',
  templateUrl: './southpark.component.html',
  styleUrls: ['./southpark.component.css']
})
export class SouthparkComponent {
  characters: SouthPark[] = []

  constructor(private southparkservice: SouthparkService) {
    this.loadCharacters();
  }


  private loadCharacters() {
    this.southparkservice.getCharacters().subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: (value: InfoApiSouthPark) => {
          this.characters = value.data;
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
