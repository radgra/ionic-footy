import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/stats.model';
import { StatsService } from 'src/app/services/stats.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  stats:Stats[]

  constructor(private statsService:StatsService) { }

  ngOnInit() {
    this.statsService.getGoalsStats().pipe(
      tap(stats => this.stats = stats)
    ).subscribe()
  }

}
