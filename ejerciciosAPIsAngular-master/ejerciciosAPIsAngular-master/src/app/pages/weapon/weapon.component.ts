import {Component, OnInit} from '@angular/core';
import {WeaponsAPIs} from "../../interfaces/weaponsAPIs";
import {ActivatedRoute} from "@angular/router";
import {WeaponsService} from "../../services/weapons.service";

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit{

  oneWeapon !: WeaponsAPIs;

  constructor(
    private ActivatedRoute : ActivatedRoute,
    private weaponService : WeaponsService
  ) {
  }

  ngOnInit(): void {
    this.loadWeapon();
  }


  private loadWeapon() {
    const id = this.ActivatedRoute.snapshot.params['id'];
     this.weaponService.getWeapon(id).subscribe({
       next:value => {
         this.oneWeapon = value
       },
       error : err => console.log(err),
       complete : () => console.log("complete")
     })
  }
}
