import { Player } from './player.model';
import { Team } from './team.model';
import { Round } from './round.model';
import { Goal } from './goal.model';

export interface Scorer {
    player:Player
    minute:number
}


export interface Match {
    worldCupYear:Number,
    homeTeam:Team
    awayTeam:Team
    goalsHomeTeam:Number
    goalsAwayTeam:Number
    round?:Round
    date:Date
    scorersHomeTeam:Scorer[]
    scorersAwayTeam:Scorer[]
    goals?:Goal[]
}