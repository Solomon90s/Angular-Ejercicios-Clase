import {Component} from '@angular/core';
import {ApiResultPokemon, Pokemon} from "../../common/interfacePokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent{
  // Me voy a guardar toda la informacion de la api
  apiData!: ApiResultPokemon;
  pokemons: Pokemon[] = [];
  // Creamos la variable de la página actual, que empieza en la 1. Es la pagina inicial
  page: number = 1;
  // Variable para saber el tamaño de la página
  pageSize: number = 21;

  constructor(private pkmservice: PokemonService) {
    this.loadPokemons();
  }

  // Funcion paginada y con tamaño
  // Le pasamos el número de pagina y el número de elementos
  loadPokemons() {
    this.pkmservice.getPokemonsPaginationAndSized(this.page, this.pageSize).subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: value => {
          this.apiData = value;
          this.pokemons = value.data;
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

  // Funcion para cambiar los elementos que se muestran en pantalla
  updatePageSize(event: any) {
    // Actualizamos la pagina si hemos cogido un valor dentro del evento
    if (event.target.value ){
      // actualizo el tamaño de pagina
      this.pageSize = event.target.value;
      // actualizo el número de página
      this.page = 1;
      // invoco a la función
      this.loadPokemons();
    }

  }
}
