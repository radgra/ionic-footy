import { Team } from './team.model';
export interface Player {
    firstName?:string
    lastName:string;
    born?:Date
    team?:Team
}