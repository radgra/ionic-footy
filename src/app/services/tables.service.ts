import { Injectable } from '@angular/core';
import { TableModel } from '../models/table.model';
import { tableData } from './table-data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  tables:TableModel[] = tableData
  constructor() { }

  getTablesForWcYear(year:number) {
    const filteredTables = this.tables.filter(t => t.year === year)
    //groupBy Table, orderby position
    return of(filteredTables)
  }
}
