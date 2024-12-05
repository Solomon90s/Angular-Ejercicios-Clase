import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiSouthPark} from "../common/southpark";

@Injectable({
  providedIn: 'root'
})
export class SouthparkService {
  private URI: string = "https://spapi.dev/api/characters";

  constructor( private http: HttpClient) { }

  getCharacters(): Observable<InfoApiSouthPark>{
    return this.http.get<InfoApiSouthPark>(this.URI);
  }
}
