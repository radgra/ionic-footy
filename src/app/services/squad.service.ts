import { Injectable } from '@angular/core';
import { Squad } from '../models/player.model';
import { from} from 'rxjs';
import { groupBy, mergeMap, reduce, map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { groupBy} from 'lodash'

export interface SquadView {
  Goalkeeper:Squad[]
  Defender:Squad[]
  Midfielder:Squad[]
  Forward:Squad[]
}

@Injectable({
  providedIn: 'root'
})
export class SquadService {

  constructor(private http:HttpClient) { }

  getSquadForWorldCup(year:number) {
    const params = new HttpParams().set('year', ''+year)
  
    return this.http.get(`${environment.url}/squads`,{params}).pipe(
      map((data:any) => data.data),
      mergeMap((data:Squad[]) => {
        return from(data)
      }),
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
        },{} as SquadView),
      )
  }

}
