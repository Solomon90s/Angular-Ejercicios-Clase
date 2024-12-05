import {Component, OnInit} from '@angular/core';
import {marvelAPI, Result} from "../../interface/marvelAPI";
import {MarvelServiceService} from "../../service/marvel-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-one-marvel',
  templateUrl: './one-marvel.component.html',
  styleUrls: ['./one-marvel.component.css']
})
export class OneMarvelComponent implements OnInit{
  infoOne !:marvelAPI;

  constructor(private oneService : MarvelServiceService ,
              private activatedRoute : ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.loadOne();
  }

  private loadOne() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.oneService.getOne(id).subscribe(
      {
        next:value => {
          this.infoOne = value
        },
        error:err => console.log(err),
        complete:()  => console.log('done')
      }
    )
  }
}
