import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {marvelAPI, Result} from "../interface/marvelAPI";

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {
URLBASE="https://gateway.marvel.com/v1/public/comics?ts=1&apikey=de4936375b2f60caca31e72756cabaab&hash=14477f62c252b0847f9077365d40fc22&offset=20";


  constructor(private http:HttpClient) { }

  getMarvels():Observable<marvelAPI>{
    return this.http.get<marvelAPI>(this.URLBASE);
  }
  getOne(id:number):Observable<marvelAPI>{
    return this.http.get<marvelAPI>("https://gateway.marvel.com/v1/public/comics/"+id+"?ts=1&apikey=de4936375b2f60caca31e72756cabaab&hash=14477f62c252b0847f9077365d40fc22&offset=20")
  }
}
