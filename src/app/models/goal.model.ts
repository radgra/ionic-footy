import { Player } from './player.model';

export interface Goal {
    minute:number,
    player:Player,
    awayTeamGoal:boolean;
    homeTeamGoal:boolean;
    
}