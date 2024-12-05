import {Component} from '@angular/core';
import {ValorantService} from "../../services/valorant.service";
import {Agent} from "../../common/interfaceValorant";

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.component.html',
  styleUrls: ['./valorant.component.css']
})
export class ValorantComponent{
  agents: Agent[] = [];

  constructor(private valservice:ValorantService) {
    this.loadAgents();
  }

  private loadAgents() {
    this.valservice.getAgents().subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: value => {
          this.agents = value.data;
          console.log(value);
        },
        // El error si algo sale mal
        error: err => {
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
