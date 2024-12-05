import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CharacterFinalSpace} from "../common/interfaceFinalSpace";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FinalspaceService {

  private URI: string = "https://finalspaceapi.com/api/v0/character/";

  constructor(private http: HttpClient) { }


  getCharactersFS(): Observable<CharacterFinalSpace[]>{
    return this.http.get<CharacterFinalSpace[]>(this.URI);
  }

  getCharacterFS(id:number): Observable<CharacterFinalSpace>{
    return this.http.get<CharacterFinalSpace>(this.URI+id);
  }


}
