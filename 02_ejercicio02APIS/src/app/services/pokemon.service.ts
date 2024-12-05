import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiResultOnePokemon, ApiResultPokemon} from "../common/interfacePokemon";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private URI: string = "https://api.pokemontcg.io/v2/cards/";

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<ApiResultPokemon>{
    return this.http.get<ApiResultPokemon>(this.URI+'?page=1&pageSize=20');
  }

  // Creamos la funcion en la que nos pasan la pagina
  getPokemonsPagination(page: number): Observable<ApiResultPokemon>{
    return this.http.get<ApiResultPokemon>(this.URI+'?page='+page+'&pageSize=21');
  }

  // Creamos una función pasandole el id del pokemon
  getPokemon(id:string): Observable<ApiResultOnePokemon>{
    return this.http.get<ApiResultOnePokemon>(this.URI+'/'+id);
  }

  // Creamos la funcion en la que nos pasan la pagina y el tamaño total de elementos por pagina
  getPokemonsPaginationAndSized(page: number, pageSize: number): Observable<ApiResultPokemon>{
    return this.http.get<ApiResultPokemon>(this.URI+'?page='+page+'&pageSize='+pageSize);
  }

}
