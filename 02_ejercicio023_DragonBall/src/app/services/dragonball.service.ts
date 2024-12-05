import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DragonBall, InfoDragonBall} from "../common/dragonball";

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  private URI: string = "https://dragonball-api.com/api/characters/";


  constructor(private http: HttpClient) { }

  getCharacters(): Observable<InfoDragonBall>{
    return this.http.get<InfoDragonBall>(this.URI);
  }

  getCharacterPagination(page: number, limit: number): Observable<InfoDragonBall>{
    return this.http.get<InfoDragonBall>(this.URI+'?page='+page+'&limit='+limit);
  }

  getCharacterDB(id: number): Observable<DragonBall>{
    return this.http.get<DragonBall>(this.URI+id);
  }
}
