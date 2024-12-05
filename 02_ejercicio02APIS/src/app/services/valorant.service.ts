import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResultValorantOne, Agent, InfoApiValorant} from "../common/interfaceValorant";

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  private URI: string = 'https://valorant-api.com/v1/agents/';

  constructor( private http: HttpClient ) { }

  getAgents():Observable<InfoApiValorant> {
    return this.http.get<InfoApiValorant>(this.URI);
  }

  // Creamos una función pasandole el id del pesonaje
  /*
  * Esto es para apis sencillas, hacemos un bypass le decimos que va a devolver un agente
  * Aqui realizamos el mapeo y le decimos que devuelve un agente
  * */
  getAgent(id: string): Observable<Agent>{
    return this.http.get<ApiResultValorantOne>(this.URI+id).pipe(
      map(info => info.data)
    );
  }
}

