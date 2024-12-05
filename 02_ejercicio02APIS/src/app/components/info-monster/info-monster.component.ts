import {Component} from '@angular/core';
import {WeaponsMonsterHunter} from "../../common/interfaceMonsterHunter";
import {ActivatedRoute, Router} from "@angular/router";
import {MonsterhunterService} from "../../services/monsterhunter.service";

@Component({
  selector: 'app-valorant-monster',
  templateUrl: './info-monster.component.html',
  styleUrls: ['./info-monster.component.css']
})
export class InfoMonsterComponent{

  // Creamos una variable para el id del arma
  idWeapon: number = 0;

  // Recogemos el weapon
  weapon!: WeaponsMonsterHunter;

  // Recogemos el valor
  constructor(private activatedRoute: ActivatedRoute,
              private dataService: MonsterhunterService,
              private router: Router) {
    // Nos permite acceder a las variables de la ruta
    this.loadWeapon();
  }

  private loadWeapon() {
    this.activatedRoute.params.subscribe({
      next: value => {
        console.log(value);
        this.idWeapon = +value['id'];
        this.dataService.getWeaponMH(this.idWeapon).subscribe({
          next: weaponData => {
            this.weapon = weaponData;
          },
          error: err => {
            console.error(err);
          },
          complete: () => {
            console.log('Weapon loaded');
          }
        })
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      }
    });
    console.log(this.activatedRoute.snapshot.params);
  }

  anterior() {
    if (this.idWeapon > 0)this.router.navigateByUrl('/info-monster/'+(this.idWeapon-1));

  }

  siguiente() {
    if (this.idWeapon < 1300)this.router.navigateByUrl('/info-monster/'+(this.idWeapon+1));

  }
}
