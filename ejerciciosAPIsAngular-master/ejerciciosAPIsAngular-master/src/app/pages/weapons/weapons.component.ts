import {Component, OnInit} from '@angular/core';
import {WeaponsAPIs} from "../../interfaces/weaponsAPIs";
import {WeaponsService} from "../../services/weapons.service";



@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit{
  infoAPI!:WeaponsAPIs[];

  constructor(private weaponsService:WeaponsService) {
  }
    ngOnInit(): void {
       this.getWeapons();
    }
    getWeapons() {
       this.weaponsService.getWeapons().subscribe({
        next:(data : WeaponsAPIs[]) =>{
          return this.infoAPI=data
        },
         error : err => console.log(err),
         complete:() => console.log('complete')
      })
     }
}
