import {Component, OnInit} from '@angular/core';
import {CharacterFinalSpace} from "../../common/interfaceFinalSpace";
import {ActivatedRoute, Router} from "@angular/router";
import {FinalspaceService} from "../../services/finalspace.service";

@Component({
  selector: 'app-valorant-finalspace',
  templateUrl: './info-finalspace.component.html',
  styleUrls: ['./info-finalspace.component.css']
})
export class InfoFinalspaceComponent{

  // Creamos una variable del id del personaje
  id: number = 0;

  // Recogemos el personaje, ! le decimos que lo inicializamos
  character!: CharacterFinalSpace;

  title = 'Api Final Space con Angular';

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: FinalspaceService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadCharacter();
  }

  private loadCharacter() {

    // Esta es la manera dinámica
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.id = +value['id'];
        this.dataService.getCharacterFS(this.id).subscribe({
          next: data => {
            this.character = data;
          },
          error: err => {
            console.error(err);
          },
          complete: () => {
            console.log('Char loaded');
          }
        })
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      }
    });
    console.log(this.activatedRoute.snapshot.params);
  }

  anterior() {
    if (this.id > 0) this.router.navigateByUrl('/info-finalspace/'+(this.id-1));
  }

  siguiente() {
    if (this.id < 47)this.router.navigateByUrl('/info-finalspace/'+(this.id+1));
  }
}
