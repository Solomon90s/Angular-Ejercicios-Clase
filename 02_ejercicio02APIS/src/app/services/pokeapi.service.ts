import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, switchAll, switchMap} from "rxjs";
import {ApiResultPokeAPI, MiPokemon, PokemonPokeAPI, PokeName} from "../common/interfacePokeApi";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private URI = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) {
  }

  // Ahora nos vamos a traer parte de la infomación de la API, de la petición individual de cada pokemon
  getPokemons(page: number, pageSize: number): Observable<MiPokemon[]> {
    // pageSize = 20
    // Page 1 --> offset 0
    // Page 2 --> offset 20
    // Page 3 --> offset 40
    const limit = pageSize;
    const offset = pageSize * (page - 1);
    return this.http.get<ApiResultPokeAPI>(this.URI + '?limit=' + limit + '&offset=' + offset).pipe(
      // Usamos el pipe para usar RxJS (Programación reactiva)
      // El map filtra la información
      // Nos quedamos con el results, parte del array que estamos recogiendo
      // El switchMap va a sincronizar la respuesta de los observables puestos dentro del forkjoin
      map(pokem => pokem.results),
      switchMap(pokes => forkJoin<MiPokemon[]>(
        // Aquí lo volvemos a filtrar
        pokes.map((poke: PokeName) => this.getData(poke))
      ))
    )
  }

  // Esta funcion coge la información individual de cada pokemon
  getData(poke: PokeName): Observable<MiPokemon> {
    return this.http.get<PokemonPokeAPI>(poke.url).pipe(
      // Con ({...data.sprites.other['official-artwork'], ...poke})) me quedo SÓLO CON LO QUE ME INTERESA
      /* Operador spread
      El operador spread (o de propagación) te permite expandir
      un objeto iterable en una serie de objetos individuales
       */
      map(data => ({...data.sprites.other['official-artwork'], ...poke}))
    )
  }
}

[]
