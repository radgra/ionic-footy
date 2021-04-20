import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WcSquadPage } from './wc-squad.page';
import { PlayerPositionListComponent } from './player-position-list/player-position-list.component';

const routes: Routes = [
  {
    path: '',
    component: WcSquadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WcSquadPage, PlayerPositionListComponent]
})
export class WcSquadPageModule {}
