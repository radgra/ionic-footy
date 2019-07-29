import { Team } from './team.model';
export interface Player {
    id?:number
    firstName?:string
    lastName:string;
    born?:Date
    team?:Team
}


// M2M worldcup/player
type Position = "Bramkarz" | "Obronca" | "Pomocnik" | "Napastnik"; 
export interface Squad {
    player:Player
    year:number
    appearances:number
    goals:number;
    position: Position
}