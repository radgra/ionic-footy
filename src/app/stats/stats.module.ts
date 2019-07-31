import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatsPage } from './stats.page';

const routes: Routes = [
  {
    path: '', redirectTo:"tabs/goals", pathMatch:"full"},
  {
    path:'tabs',
    component:StatsPage,
    children:[
      {path:"goals", loadChildren:'./stats/goals/goals.module#GoalsPageModule'},
      { path: 'played', loadChildren: './stats/played/played.module#PlayedPageModule' },
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
  declarations: [StatsPage]
})
export class StatsPageModule {}

