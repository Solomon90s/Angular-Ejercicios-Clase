import {Component, OnInit} from '@angular/core';
import {marvelAPI} from "../../interface/marvelAPI";
import {MarvelServiceService} from "../../service/marvel-service.service";

@Component({
  selector: 'app-marvels',
  templateUrl: './marvels.component.html',
  styleUrls: ['./marvels.component.css']
})
export class MarvelsComponent implements OnInit{
  infoMarvel !: marvelAPI;

  constructor(private marvelService : MarvelServiceService) {
  }



  ngOnInit(): void {
    this.loadMarvels();
  }

  private loadMarvels() {
    return this.marvelService.getMarvels().subscribe(
      {
        next: value =>{
          this.infoMarvel=value;
        },
        error:err => console.log(err),
        complete:() => console.log("done")
      }
    )
  }
}
