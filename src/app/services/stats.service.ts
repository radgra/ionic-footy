import { Injectable } from '@angular/core';
import { Stats } from '../models/stats.model';
import { of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient) { }

  getAppearanceStats() {
    const params = new HttpParams().set('type', 'matches')
  
    return this.http.get(`${environment.url}/stats`,{params}).pipe(
      map((data:any) => data.data),
      // map((stats:Stats[]) => {
      //   return stats.sort((a,b) => a.position - b.position)
      // })
      )
  }

  getGoalsStats() {
    const params = new HttpParams().set('type', 'goals')
  
    return this.http.get(`${environment.url}/stats`,{params}).pipe(
      map((data:any) => data.data),
      // map((stats:Stats[]) => {
      //   return stats.sort((a,b) => a.position - b.position)
      // })
      )
      
  }

}
