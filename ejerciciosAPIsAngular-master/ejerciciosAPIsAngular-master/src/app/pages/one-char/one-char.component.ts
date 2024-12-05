import {Component, OnInit} from '@angular/core';
import { CharactersAPIs} from "../../interfaces/charactersAPIs";
import {ActivatedRoute} from "@angular/router";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-one-char',
  templateUrl: './one-char.component.html',
  styleUrls: ['./one-char.component.css']
})
export class OneCharComponent implements OnInit{
  charInfo !: CharactersAPIs ;

  constructor(private ActivatedRoute :ActivatedRoute ,
              private OneCharService : CharactersService) {
  }

  ngOnInit(): void {
    this.loadChar();
  }

  private loadChar() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.OneCharService.getChar(id).subscribe({
      next:value => {
        this.charInfo = value
      },
      error : err => console.log(err),
      complete : () => console.log("complete")
    })
  }
}
