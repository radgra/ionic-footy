import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'wcs', pathMatch: 'full' },
  { path: 'wcs', children: [
      { path: "", loadChildren: './main-page/main-page.module#MainPagePageModule' },
      { path: ':year', loadChildren: './world-cup-detail/world-cup-detail.module#WorldCupDetailPageModule' },
    ]
  },  { path: 'stats', loadChildren: './stats/stats.module#StatsPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
