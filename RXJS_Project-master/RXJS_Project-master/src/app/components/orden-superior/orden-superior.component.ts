import { Component } from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {ApiResultRM, Character} from "../../common/rickymorty";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-orden-superior',
  templateUrl: './orden-superior.component.html',
  styleUrls: ['./orden-superior.component.css']
})
export class OrdenSuperiorComponent
{
    //Hacemos un observable
  data$! : Observable<Character>;
  url = 'https://rickandmortyapi.com/api/character/';

  constructor(private  http: HttpClient) {
    this.data$ = this.http.get<ApiResultRM>(this.url)
      .pipe(map((response: ApiResultRM) => response.results),
        //cogemos solo los resultados generamos un número aleatorio de
        //los resultados devueltos
        map(() => Math.floor(Math.random()*20+1)),
      // seleccionamos uno de los 20 al azar.
      // Con el array de results pasamos a un único resultado. Un único observable
        switchMap((id:number) =>
          this.http.get<Character>(this.url+id)));
      // con el operador de orden superior convertimos nuestro Array
      //de Character a un único Character
  }
}
