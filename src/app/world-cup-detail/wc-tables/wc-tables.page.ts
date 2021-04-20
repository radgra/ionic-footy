import { Component, OnInit } from '@angular/core';
import { WorldCup } from 'src/app/models/worldCup.model';
import { Subscription } from 'rxjs';
import { WcTabsService } from '../wc-tabs.service';
import { TablesService, TableView } from 'src/app/services/tables.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-wc-tables',
  templateUrl: './wc-tables.page.html',
  styleUrls: ['./wc-tables.page.scss'],
})
export class WcTablesPage implements OnInit {
  tabsSub:Subscription
  tables:TableView[]
  worldCup:WorldCup

  constructor(private tabsService:WcTabsService, private tablesService:TablesService) { }

  ngOnInit() {
    this.tabsSub = this.tabsService.worldCupChanges().pipe(
      switchMap(wc => {
        this.worldCup = wc
        return this.tablesService.getTablesForWcYear(wc.year)
      }),
      tap(tables => {
        this.tables = tables 
      })
    ).subscribe()
  }

}
