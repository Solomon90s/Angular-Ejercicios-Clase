import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-calientes',
  templateUrl: './calientes.component.html',
  styleUrls: ['./calientes.component.css']
})
export class CalientesComponent
{
    counter = 0;
    private intervalSubscription!: Subscription;

    constructor()
    {
      this.start();
    }

  public start()
  {
    this.intervalSubscription = interval(1000).subscribe(
      {
        next:value => {
          this.counter = value;
        },
        error: err => {
          console.error(err);
        },
        complete:()=>{
          console.log('Complete');
        }
      }
    )
  }
  stop(){
      this.intervalSubscription.unsubscribe();
  }
}
