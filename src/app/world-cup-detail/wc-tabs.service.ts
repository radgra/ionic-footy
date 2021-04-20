import { WorldCup } from 'src/app/models/worldCup.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WcTabsService {
  private $wcSelected:BehaviorSubject<WorldCup> = new BehaviorSubject(null)

  constructor() { }

  setWorldCup(worldCup:WorldCup) {
    this.$wcSelected.next(worldCup)
  }

  worldCupChanges() {
    return this.$wcSelected.asObservable()
  }


}
