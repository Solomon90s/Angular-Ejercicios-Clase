import {Component, OnInit} from '@angular/core';
import {Agent} from "../../common/interfaceValorant";
import {ActivatedRoute, Router} from "@angular/router";
import {ValorantService} from "../../services/valorant.service";

@Component({
  selector: 'app-valorant-valorant',
  templateUrl: './info-valorant.component.html',
  styleUrls: ['./info-valorant.component.css']
})
export class InfoValorantComponent implements OnInit {

  // Recogemos el personaje
  agent!: Agent;

  constructor(private activatedRoute: ActivatedRoute,
              private valorantService: ValorantService,) {
    // Nos permite acceder a las variables de la ruta
  }
    ngOnInit(): void {
        this.loadAgent();
    }

  private loadAgent() {
    // Esta es la manera estatica porque el id es de tipo string
    const id = this.activatedRoute.snapshot.params['id'];
    this.valorantService.getAgent(id).subscribe({
      next: value => {
        console.log(value);
        this.agent = (value);
      }
    })
  }
}
