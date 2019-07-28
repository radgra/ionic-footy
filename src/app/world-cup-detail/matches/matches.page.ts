import { Match } from './../../models/match.model';
import { MatchesService } from './../../services/matches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { WorldCup } from 'src/app/models/worldCup.model';
import { tap, switchMap } from 'rxjs/operators';
import { WcTabsService } from '../wc-tabs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit, OnDestroy {
  worldCup:WorldCup
  matchesGroup:{matches:Match[], order:number}[]
  tabsSub:Subscription

  constructor(private worldCupService:WorldCupService, private matchesService:MatchesService,
              private route:ActivatedRoute, 
              private router:Router, private tabsService:WcTabsService) { }

  ngOnInit() {
    this.tabsSub = this.tabsService.worldCupChanges().pipe(
      switchMap(wc => {
        this.worldCup = wc
        return this.matchesService.getMatchesForWorldCup(wc.year)
      }),
      tap(matchesGroup => {
        this.matchesGroup = matchesGroup
      })
    ).subscribe()
  }

  ngOnDestroy() {
    this.tabsSub.unsubscribe()
  }
  

}
