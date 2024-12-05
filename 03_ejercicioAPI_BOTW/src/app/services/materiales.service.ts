import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiOneMaterial, ApiResultMaterialsZelda} from "../common/interfazZeldaMaterials";
import {ApiResultOneMonster} from "../common/interfazZeldaMonstruos";

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {
  private URI: string = "https://botw-compendium.herokuapp.com/api/v3/compendium/";


  constructor( private  http: HttpClient) { }

  getMaterialsZelda(): Observable<ApiResultMaterialsZelda>{
    return this.http.get<ApiResultMaterialsZelda>(this.URI+'category'+'/materials')
  }

  getMaterialZelda(id:number): Observable<ApiOneMaterial>{
    return this.http.get<ApiOneMaterial>(this.URI+'entry/'+id);
  }
}
