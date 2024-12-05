import { Component } from '@angular/core';
import {Observable, Subject, switchMap} from "rxjs";
import {Character} from "../../common/rickymorty";
import {RxjsService} from "../../services/rxjs.service";

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent
{
  //El subject es un observable(contenedor) al que le puedes emitir valores
  //y se pueden recoger esos observables que se van a ir enviando
  searchTerm$ = new Subject<string>();
  characters$!: Observable<Character[]>;

  constructor(private  rxjsService: RxjsService)
  {
    //En el observable guardamos el término de búsqueda.
    //Hacemos la petición a la API y cada vez que hace un nuevo término de búsqueda cancela el anterior
    this.characters$ = this.searchTerm$.pipe(
      switchMap((term: string) =>
      this.rxjsService.filterCharacter(term))
    );
  }

  search(event: Event): void
  {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }
}
