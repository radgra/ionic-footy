import { Player } from './player.model';

export interface Stats {
    player:Player;
    appearances:number;
    goals:number;
    appearencesRanking?: number;
    goalsRanking?: number
}