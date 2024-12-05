import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeaponsMonsterHunter} from "../common/interfaceMonsterHunter";

@Injectable({
  providedIn: 'root'
})
export class MonsterhunterService{
private URI: string = 'https://mhw-db.com/weapons';
  constructor(private http: HttpClient) { }

  page: number = 1;

  getWeaponsMH(): Observable<WeaponsMonsterHunter[]> {
    /* Esto es una consulta de mongodb
    gte significa --> greater than equal
    lte --> leater than equal
    La , significa y --> &&
     */
    return this.http.get<WeaponsMonsterHunter[]>(this.URI);
  }

  // Creamos una función pasandole el id del arma
  getWeaponMH(id:number):Observable<WeaponsMonsterHunter> {
    return this.http.get<WeaponsMonsterHunter>(this.URI+'/'+id);
  }

  // Creamos una función pasandole el número de página
  getWeaponsMHPaged(page: number, pageSize: number):Observable<WeaponsMonsterHunter[]> {
    // Página 1 --> gte = 1 lte= 20
    // Página 2 --> gte = 21 lte= 40
    // Página 3 --> gte = 41 lte= 60

    const gte = 1+(pageSize*(page-1));
    const lte = page*pageSize;
    return this.http.get<WeaponsMonsterHunter[]>(this.URI+'?q={"id":{"$gte":'+gte+',"$lte":'+lte+'}}');
  }
}
