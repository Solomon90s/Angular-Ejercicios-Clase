import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CharactersAPIs} from "../interfaces/charactersAPIs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) {}


  URLBASE = "https://finalspaceapi.com/api/v0/character";
  getCharacters():Observable<CharactersAPIs[]>{
    return this.http.get<CharactersAPIs[]>(this.URLBASE)
  }

  getChar(id :number) : Observable<CharactersAPIs>{
    return this.http.get<CharactersAPIs>(this.URLBASE + "/" + id )
  }
}
