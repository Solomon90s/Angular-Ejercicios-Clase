import { Component } from '@angular/core';
import {RxjsService} from "../../services/rxjs.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent
{
  carrito: number = 0;
  constructor(private  service: RxjsService)
  {
    this.service.carrito.subscribe(
      {
        next: value => {
          this.carrito = value;
        },
        error: err => {
          console.error(err);
        },
        complete:()=>{
          console.log('Carrito complete.');
        }
      }
    )
  }
}
