import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultEldenRing} from "../common/games";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private URI: string = "https://eldenring.fanapis.com/api/bosses";

  constructor(private http: HttpClient) { }

  getVideoGames(): Observable<ApiResultEldenRing>{
    return this.http.get<ApiResultEldenRing>(this.URI);
  }
}
