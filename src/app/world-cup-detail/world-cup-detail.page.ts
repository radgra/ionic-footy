import { WcTabsService } from './wc-tabs.service';
import { WorldCup } from './../models/worldCup.model';
import { WorldCupService } from './../services/world-cup.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import {filter, tap, switchMap} from 'rxjs/operators'
import { of } from 'rxjs';
@Component({
  selector: 'app-world-cup-detail',
  templateUrl: './world-cup-detail.page.html',
  styleUrls: ['./world-cup-detail.page.scss'],
})
export class WorldCupDetailPage implements OnInit {
  worldCup:WorldCup
  constructor(private route:ActivatedRoute, private router:Router, private worldCupService:WorldCupService, private wcTabsService:WcTabsService) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      tap(params => {
        console.log(params)
        if(!params.has('year')) {
          this.router.navigateByUrl('/')
      }}),
      switchMap(params => {
        const wcYear =  +params.get('year')
        console.log(wcYear)
        return this.worldCupService.getWorldCup(wcYear)
      }),
      tap(worldCup => {
        this.worldCup = worldCup
        this.wcTabsService.setWorldCup(worldCup)
      })
    ).subscribe()
  }

}
