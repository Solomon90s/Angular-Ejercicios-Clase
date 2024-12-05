import {Component} from '@angular/core';
import {WeaponsMonsterHunter} from "../../common/interfaceMonsterHunter";
import {MonsterhunterService} from "../../services/monsterhunter.service";

@Component({
  selector: 'app-monsterhunter',
  templateUrl: './monsterhunter.component.html',
  styleUrls: ['./monsterhunter.component.css']
})
export class MonsterhunterComponent{
  // ! Es para indicarle que lo vamos a llamar si o si
  weapons: WeaponsMonsterHunter[] = [];

  page = 1;
  pageSize = 20;
  totalCount = 1;
  loadData = false;

  constructor(private monsterhunterservice: MonsterhunterService) {
    this.loadWeapons();
  }

  loadWeapons() {
    this.monsterhunterservice.getWeaponsMHPaged(this.page, this.pageSize).subscribe(
      {
        // La respuesta del servidor la cogemos con el next
        // El next es si va todo bien
        next: value => {
          this.weapons = value;
          this.monsterhunterservice.getWeaponsMH().subscribe({
            next: value1 => {
              this.totalCount = value1.length;
              this.loadData = true;
            },
            error: err => {
              console.error(err);
            },
            complete: () => {
              console.log('Load complete')
            }
          })
          console.log(this.weapons);
        },
        // El error si algo sale mal
        error: (err) => {
          console.error(err);
        },
        // Aquí si todo ha salido bien
        complete: () => {
          console.log('Done');
        }
      }
    )
  }

  // Metodo de cambio de pagina
  pageSizeChange(event: any) {
    console.log(event);
    if (event.target.value){
      this.pageSize = event.target.value;
      this.page = 1;
      this.loadWeapons();
    }

  }
}
