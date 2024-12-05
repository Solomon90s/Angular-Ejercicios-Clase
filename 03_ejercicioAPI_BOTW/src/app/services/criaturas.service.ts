import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultOneCreature, ApiResultZelda} from "../common/interfazZeldaCriaturas";
import {ApiResultOneMonster} from "../common/interfazZeldaMonstruos";

@Injectable({
  providedIn: 'root'
})
export class CriaturasService {
  private URI: string = "https://botw-compendium.herokuapp.com/api/v3/compendium/";


  constructor( private  http: HttpClient) { }

  getCreaturesZelda(): Observable<ApiResultZelda>{
    return this.http.get<ApiResultZelda>(this.URI+'category'+'/creatures')
  }

  getCreatureZelda(id:number): Observable<ApiResultOneCreature>{
    return this.http.get<ApiResultOneCreature>(this.URI+'entry/'+id);
  }
}
