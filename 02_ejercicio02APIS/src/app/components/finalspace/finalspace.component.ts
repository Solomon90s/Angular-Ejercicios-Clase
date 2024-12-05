import {Component} from '@angular/core';
import {CharacterFinalSpace} from "../../common/interfaceFinalSpace";
import {FinalspaceService} from "../../services/finalspace.service";

@Component({
  selector: 'app-finalspace',
  templateUrl: './finalspace.component.html',
  styleUrls: ['./finalspace.component.css']
})
export class FinalspaceComponent{

  characters: CharacterFinalSpace[] = [];

  constructor(private fsservice: FinalspaceService) {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.fsservice.getCharactersFS().subscribe(
        {
          // La respuesta del servidor la cogemos con el next
          // El next es si va todo bien
          next: value => {
            this.characters = value;
          },
          // El error si algo sale mal
          error: (err) => {
            console.error(err);
          },
          // Aquí si todo ha salido bien
          complete: () => {
            console.log('Done');
          }
        }
    )
  }

}
