import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiZelda} from "../common/zelda";

@Injectable({
  providedIn: 'root'
})
export class ZeldaService {
  private URI: string = "https://zelda.fanapis.com/api/games";

  constructor(private http: HttpClient) { }

  getGames(): Observable<InfoApiZelda>{
    return this.http.get<InfoApiZelda>(this.URI);
  }
}
