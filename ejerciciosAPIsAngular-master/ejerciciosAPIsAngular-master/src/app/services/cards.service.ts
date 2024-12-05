import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CardsAPIs } from "../interfaces/cardsAPIs";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) {}

  getCards():Observable<CardsAPIs>{
    return this.http.get<CardsAPIs>("https://api.pokemontcg.io/v2/cards")
  }
}
