import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { of, Observable } from 'rxjs';
import { Round } from '../models/round.model';
import { groupBy} from 'lodash'
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface SortedMatches {
  positon:Round,
  matches:Match[]
}

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http:HttpClient) { }

  getMatchesForWorldCup(year:number) : Observable<{matches:Match[], order:number}[]> {
    const params = new HttpParams().set('year', ''+year)
  
    return this.http.get(`${environment.url}/matches`,{params}).pipe(
      map((data:any) => data.data),
      map(this._transformMatches.bind(this)),
      )
  }
  
  private _transformMatches(matches:Match[]) : {matches:Match[], position:number}[] {
    const groupedMatchesObj = (groupBy(matches,(match) => {
      return match.stage.position
    }))

    const groupedMatches = Object.keys(groupedMatchesObj).map(key => {
      const obj = {matches:groupedMatchesObj[key],position:+key}
      return obj
    })
    
    return groupedMatches.sort((prev,next) => prev.position > next.position ? 1 : -1)
  }



}
