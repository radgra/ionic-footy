import { Pipe, PipeTransform } from '@angular/core';
import { Goal } from '../models/goal.model';

@Pipe({
  name: 'matchGoals'
})
export class MatchGoalsPipe implements PipeTransform {

  transform(goals: Goal[], ...args: any[]): any {
    if(! args[0]) return goals
    const filteredGoals = args[0]==='home' ? goals.filter(goal => goal.homeTeamGoal) : goals.filter(goal => goal.awayTeamGoal)
    
    return filteredGoals.sort((prev,next) => prev.minute > next.minute ? 1 : -1 );
  }

}
