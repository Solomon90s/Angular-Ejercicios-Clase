import {Component, OnInit} from '@angular/core';
import {CharactersAPIs} from "../../interfaces/charactersAPIs";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  infoAPI: CharactersAPIs[]=[];

    constructor(private charactersService:CharactersService) {
    }
    ngOnInit(): void {
      this.loadCharacters();
    }

   loadCharacters() {
    this.charactersService.getCharacters().subscribe({
      next:(data:CharactersAPIs[]) => {
         this.infoAPI = data
      },
      error : err => console.log(err),
      complete:() => console.log("complete")
    });
  }

  protected readonly CharactersService = CharactersService;
}
