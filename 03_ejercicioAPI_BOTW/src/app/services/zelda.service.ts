import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultZelda, ApiResultZeldaEntry} from "../common/InterfazZelda";


@Injectable({
  providedIn: 'root'
})
export class ZeldaService {

  private URI: string = "https://botw-compendium.herokuapp.com/api/v3/compendium/";
  constructor( private http: HttpClient ) { }

  getCategory(categoria: string): Observable<ApiResultZelda>{
    return this.http.get<ApiResultZelda>(this.URI+'category/'+categoria);
  }

  getDetail(id:number): Observable<ApiResultZeldaEntry>{
    return this.http.get<ApiResultZeldaEntry>(this.URI+'entry/'+id);
  }

}
