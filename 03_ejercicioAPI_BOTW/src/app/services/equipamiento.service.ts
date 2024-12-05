import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultOneEquipamiento, ApiResultZeldaEquipamiento} from "../common/interfazZeldaEquipamiento";
import {ApiResultOneMonster} from "../common/interfazZeldaMonstruos";

@Injectable({
  providedIn: 'root'
})
export class EquipamientoService {
  private URI: string = "https://botw-compendium.herokuapp.com/api/v3/compendium/";


  constructor( private  http: HttpClient) { }

  getEquipmentsZelda(): Observable<ApiResultZeldaEquipamiento>{
    return this.http.get<ApiResultZeldaEquipamiento>(this.URI+'category'+'/equipment')
  }

  getEquipmentZelda(id:number): Observable<ApiResultOneEquipamiento>{
    return this.http.get<ApiResultOneEquipamiento>(this.URI+'entry/'+id);
  }
}
