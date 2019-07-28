import { WorldCupService } from './../services/world-cup.service';
import { WorldCup } from './../models/worldCup.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  worldCups:WorldCup[] = []
  
  constructor(private WorldCupService:WorldCupService) { }

  ngOnInit() {
    this.WorldCupService.getWorldCups()
    .subscribe(wcs => {
      this.worldCups = wcs
    })
  }

  getStyles(wc:any) {
    return {
      "background-image":`url(${wc.image})`,
      "height":"126px",
      "background-size": "cover"
    }
  }

}
