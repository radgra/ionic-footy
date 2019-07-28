import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import {matches} from './matches-data'
import { of, Observable } from 'rxjs';
import { Round } from '../models/round.model';
import { groupBy} from 'lodash'
import { map } from 'rxjs/operators';

export interface SortedMatches {
  round:Round,
  matches:Match[]
}

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  matches:Match[] = matches

  constructor() { }

  getMatchesForWorldCup(year:number) : Observable<{matches:Match[], order:number}[]> {
    const filteredMatches = this.matches.filter(match => match.worldCupYear === year)

    return of(filteredMatches).pipe(
      map(this._transformMatches.bind(this))
    )
  }
  
  private _transformMatches(matches:Match[]) : {matches:Match[], order:number}[] {
    const groupedMatchesObj = (groupBy(matches,(match) => {
      return match.round.order
    }))

    const groupedMatches = Object.keys(groupedMatchesObj).map(key => {
      const obj = {matches:groupedMatchesObj[key],order:+key}
      return obj
    })
    
    return groupedMatches.sort((prev,next) => prev.order > next.order ? 1 : -1)
  }

}
