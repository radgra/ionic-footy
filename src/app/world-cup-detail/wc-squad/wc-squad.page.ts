import { Component, OnInit } from '@angular/core';
import { SquadService, SquadView } from 'src/app/services/squad.service';
import { WcTabsService } from '../wc-tabs.service';
import { Subscription } from 'rxjs';
import { WorldCup } from 'src/app/models/worldCup.model';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-wc-squad',
  templateUrl: './wc-squad.page.html',
  styleUrls: ['./wc-squad.page.scss'],
})
export class WcSquadPage implements OnInit {
  tabsSub:Subscription
  squad:SquadView
  worldCup:WorldCup

  constructor(private squadService:SquadService, private tabsService:WcTabsService) { }

  ngOnInit() {
    this.tabsSub = this.tabsService.worldCupChanges().pipe(
      switchMap(wc => {
        this.worldCup = wc
        return this.squadService.getSquadForWorldCup(wc.year)
      }),
      tap(squad => {
        this.squad = squad         
      })
    ).subscribe()
  }

}
