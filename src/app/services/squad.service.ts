import { Injectable } from '@angular/core';
import { Squad } from '../models/player.model';
import { squad } from './player-data';
import { of, from, Observable } from 'rxjs';
import { groupBy, mergeMap, tap, toArray, reduce, concatAll, mergeAll, map } from 'rxjs/operators';
// import { groupBy} from 'lodash'

export interface SquadView {
  bramkarz:Squad[]
  obronca:Squad[]
  pomocnik:Squad[]
  napastnik:Squad[]
}

@Injectable({
  providedIn: 'root'
})
export class SquadService {
  squad:Squad[] = squad

  constructor() { }

  getSquadForWorldCup(year:number): Observable<SquadView> {
    const squadForWc = this.squad.filter(sq => sq.year === year)
    
    // Pozniej trzeba znalesc operator ktory rozbija array na pojedncze czastki
    return from(squadForWc).pipe(
      groupBy(player => player.position),
      mergeMap(group => {
        return group.pipe(
          reduce((agg,item) => {
          return [...agg,item]
        },[]),  
        map(grArr => ({position:group.key,players:grArr}))
        )
      }), 
      reduce((agg,item) => {
        agg[item.position.toLowerCase()] = item.players
        return agg
      },{} as SquadView)
      // toArray()
    )
  }

}
