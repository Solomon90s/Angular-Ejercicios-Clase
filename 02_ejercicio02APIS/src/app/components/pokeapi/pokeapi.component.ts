import { Component } from '@angular/core';
import {PokeapiService} from "../../services/pokeapi.service";
import {ApiResultPokeAPI, MiPokemon} from "../../common/interfacePokeApi";

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent {
  pokeApiData!: ApiResultPokeAPI;
  pokemons: MiPokemon[] = [];
  page = 1;
  pageSize = 24;
  constructor(private pokeService: PokeapiService) {
    this.loadPokemons();
  }

  // Hacemos publica a la función para poder llamarla desde el HTML
  loadPokemons() {
    this.pokeService.getPokemons(this.page, this.pageSize).subscribe({
      next: value => {
        // this.pokeApiData = value;
        this.pokemons = value;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Load complete');
      }
    })
  }

  selectChange(event: any) {
    if (event.target.value){
      this.pageSize = event.target.value;
      this.page = 1;
      this.loadPokemons();
    }
  }
}
