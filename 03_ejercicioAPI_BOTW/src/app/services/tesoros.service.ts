import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiOneTesoro, ApiResultZeldaTesoros} from "../common/interfazZeldaTesoros";
import {ApiResultOneMonster} from "../common/interfazZeldaMonstruos";

@Injectable({
  providedIn: 'root'
})
export class TesorosService {
  private URI: string = "https://botw-compendium.herokuapp.com/api/v3/compendium/";


  constructor( private  http: HttpClient) { }

  getTreasuresZelda(): Observable<ApiResultZeldaTesoros>{
    return this.http.get<ApiResultZeldaTesoros>(this.URI+'category'+'/treasure')
  }

  getTreasureZelda(id:number): Observable<ApiOneTesoro>{
    return this.http.get<ApiOneTesoro>(this.URI+'entry/'+id);
  }
}
