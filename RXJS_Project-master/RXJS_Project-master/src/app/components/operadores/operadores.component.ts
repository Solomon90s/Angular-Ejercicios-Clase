import { Component } from '@angular/core';
import {concat, filter, map, merge, of, reduce} from "rxjs";

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent
{
  numbers1 = of(1,2,3);
  numbers2= of(4,5,6);
  //Calcula cuadrados
  squaredNumbers = this.numbers1.pipe(map(x => x * x));
  coleccionMap: number [] =[];
  //Sacar números pares
  evenNumbers= this.numbers2.pipe(filter(x=> x % 2 === 0));
  coleccionFilter: number [] = [];
  //Devolver el resultado final de la acumulación de los valores. valor anterior acumulado más valor actual del observable
  reduceNumbers = this.numbers2.pipe(reduce((x,y) => x+y));
  solucionReduce:number = 0;
  //Merge sirve para fusionar dos observables y devuelve la información del primero que llega
  mergerNumbers = merge(this.numbers1,this.numbers2);
  coleccionMerge: number [] = [];
  //Concat sirve para fusionar dos observables y devuelve la información en orden.
  concatNumbers= concat(this.numbers1,this.numbers2);
  coleccionConcat: number [] = [];

  constructor()
  {
    this.operadorMap();
    this.operadorFilter();
    this.operadorReduce();
    this.operadorMerge();
    this.operadorConcat();
  }

  operadorMap()
  {
    this.squaredNumbers.subscribe(
      {
        next: res=> {
            console.log('Map',res),
              this.coleccionMap.push(res)
        },
        error:err => console.error(err),
        complete:() => console.log('Map Complete')
      }
    )
  }

  private operadorFilter()
  {
    this.evenNumbers.subscribe(
      {
        next: res=> {
          console.log('Filter', res),
            this.coleccionFilter.push(res)
        },
        error:err => console.error(err),
        complete:() =>console.log('Filter completed')
      }
    )
  }

  private operadorReduce()
  {
    this.reduceNumbers.subscribe(
      {
        next: res => {
          console.log('Reduce', res),
            this.solucionReduce = res
        },
        error: err => console.error(err),
        complete:() => console.log('Reduce completed')
      }
    )
  }

  private operadorMerge()
  {
    this.mergerNumbers.subscribe(
      {
        next:res=> {
          console.log('Merge', res),
            this.coleccionMerge.push(res)
        },
        error:err => console.error(err),
        complete:() => console.log('Merge completed')
      }
    )
  }

  private operadorConcat()
  {
    this.concatNumbers.subscribe(
      {
        next: res => {
          console.log('Concat',res),
            this.coleccionConcat.push(res)
        },
        error: err => console.error(err),
        complete:() => console.log('Concat completed')
      }
    )
  }
}
