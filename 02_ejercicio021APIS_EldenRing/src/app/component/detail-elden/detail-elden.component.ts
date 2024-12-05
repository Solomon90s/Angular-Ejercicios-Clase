import {Component} from '@angular/core';
import {ApiResultEldenRing, ApiResultOneEldenRing, EldenRing} from "../../common/eldenRingInterfaz";
import {ActivatedRoute, Router} from "@angular/router";
import {EldenRingService} from "../../services/eldenRing.service";

@Component({
  selector: 'app-detail-elden',
  templateUrl: './detail-elden.component.html',
  styleUrls: ['./detail-elden.component.css']
})
export class DetailEldenComponent {
  boss!: EldenRing;

  constructor(private activatedRoute: ActivatedRoute,
              private eldenRingService: EldenRingService) {
    this.getBoss();
  }

  private getBoss() {
    // Esta es la manera estatica porque el id es de tipo string
    const id = this.activatedRoute.snapshot.params['id'];
    this.eldenRingService.getBoss(id).subscribe({
      next: value => {
        console.log(value);
        this.boss = (value);
      }
    })
  }
}
