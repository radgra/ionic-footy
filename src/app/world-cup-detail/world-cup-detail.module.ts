import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorldCupDetailPage } from './world-cup-detail.page';

const routes: Routes = [
  // wazne "./tabs/matches" Nie dziala !
  { path: '', redirectTo: 'tabs/matches', pathMatch: 'full' },
  {
    path: 'tabs',
    component: WorldCupDetailPage,
    children: [
      { path: 'matches', loadChildren: './matches/matches.module#MatchesPageModule' },
      { path: 'tables', loadChildren: './wc-tables/wc-tables.module#WcTablesPageModule' },
      { path: 'squad', loadChildren: './wc-squad/wc-squad.module#WcSquadPageModule' },      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorldCupDetailPage]
})
export class WorldCupDetailPageModule {}
