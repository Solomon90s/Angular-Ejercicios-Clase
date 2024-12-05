import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeaponsAPIs} from "../interfaces/weaponsAPIs";

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor(private http:HttpClient) { }

  URLBASE ='https://mhw-db.com/weapons';
  getWeapons():Observable<WeaponsAPIs[]>{
    return this.http.get<WeaponsAPIs[]>(this.URLBASE)
  }

  getWeapon(id : number):Observable<WeaponsAPIs>{
    return this.http.get<WeaponsAPIs>(this.URLBASE + '/' + id)
  }
}
