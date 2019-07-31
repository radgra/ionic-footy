import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { tap } from 'rxjs/operators';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-played',
  templateUrl: './played.page.html',
  styleUrls: ['./played.page.scss'],
})
export class PlayedPage implements OnInit {
  stats:Stats[]

  constructor(private statsService:StatsService) { }

  ngOnInit() {
    this.statsService.getAppearanceStats().pipe(
      tap(stats => this.stats = stats)
    ).subscribe()
  }

}
