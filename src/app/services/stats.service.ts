import { Injectable } from '@angular/core';
import { Stats } from '../models/stats.model';
import { Records } from './records-data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  stats:Stats[] = Records

  constructor() { }

  getAppearanceStats() {
    const apperanceStats = this.stats.filter(stat => stat.appearencesRanking !== null)
    const sortedAppear =  apperanceStats.sort((a,b) => a.appearencesRanking > b.appearencesRanking ? 1 : -1)
    
    return of(sortedAppear)
  }

  getGoalsStats() {
    const goalsStats = this.stats.filter(stat => stat.goalsRanking !== null)
    const sortedGoals =  goalsStats.sort((a,b) => a.goalsRanking > b.goalsRanking ? 1 : -1)
    
    return of(sortedGoals)
  }

}
