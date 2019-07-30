import { Injectable } from '@angular/core';
import { TableModel } from '../models/table.model';
import { tableData } from './table-data';
import { of, from, Observable } from 'rxjs';
import { groupBy, mergeMap, reduce, toArray, tap, map } from 'rxjs/operators';

export interface TableView {
  round:string;
  table:TableModel[]
}

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  tables:TableModel[] = tableData
  constructor() { }

  getTablesForWcYear(year:number):Observable<TableView[]> {
    const filteredTables = this.tables.filter(t => t.year === year)
    //groupBy Table, orderby position
    return from(filteredTables).pipe(
      groupBy(table => table.round),
      mergeMap(group => {           
        return group.pipe(
          toArray(),
          map(tabArray => tabArray.sort((t1,t2) => t1.position > t2.position ? 1 : -1 )),
          map(tabArray => ({round:group.key,table:tabArray}))
        )
      }),
      toArray(),
    )
  }
}
