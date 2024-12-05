import {Component, OnInit} from '@angular/core';
import {CardsAPIs} from "../../interfaces/cardsAPIs";
import {CardsService} from "../../services/cards.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  infoAPI!:CardsAPIs;

  constructor(private cardsService:CardsService) {
  }
  ngOnInit(): void {
  this.cargarCards();
  }

  private cargarCards() {
    this.cardsService.getCards().subscribe({
      next:(data : CardsAPIs)=>{
        this.infoAPI = data;

      },
      error : err => console.log(err),
      complete:() => console.log("complete")
    })
  }

}
