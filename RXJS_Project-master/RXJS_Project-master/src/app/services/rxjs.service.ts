import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResultRM, Character} from "../common/rickymorty";

@Injectable({
  providedIn: 'root'
})
export class RxjsService
{
  carrito: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  addElement(value:number)
  {
    this.carrito.next(this.carrito.value+value);
  }
  filterCharacter(name:string): Observable<Character[]>{
    const API = 'https://rickandmortyapi.com/api/character/?name=' + name;
    return this.http.get<ApiResultRM>(API).pipe(
      //Solo nos quedamos con la información del objeto que queremos, que en este caso es el nombre
      map((res:ApiResultRM) => res?.results),
      //Dentro del pipe podemos hacer varios operados siempre que los separemos por comas.
      //Contralamos que si existe en un error se devuelva un array vacio
      catchError(()=>of([]))
    )
  }
  constructor(private http: HttpClient) { }
}
