import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  observable$ = new Observable((subscriber)=>{
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  });
  datos: any[] = [];

  constructor()
  {
    this.comenzarObservable();
  }
  comenzarObservable()
  {
    this.observable$.subscribe({
      next:value => {
        this.datos.push(value);
        console.log(value);
      },
      error: err => {
        console.error(err);
      },
      complete:()=>{
        console.log('Complete');
      }
    })
  }

}
