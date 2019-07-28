import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldCupService {
  worldCups = [
    {
      title:"Niemcy 2006",
      image:"assets/2006.jpg",
      year:2006
    },
    {
      title:"Korea i Japonia 2002",
      image:"assets/2002.jpg",
      year:2002
    },
    {
      title:"Meksyk 1986",
      image:"assets/1986.jpg",
      year:1986      
    },
    {
      title:"Hiszpania 1982",
      image:"assets/1982.jpg",
      year:1982
      
    },
    {
      title:"Argentyna 1978",
      image:"assets/1986.jpg",
      year:1978
    },
  ]

  constructor() { }

  getWorldCups() {
    return of(this.worldCups)
  }

  getWorldCup(year:Number) {
    const foundWc = this.worldCups.find(wc => wc.year === year)
    return of(foundWc)
  }
}
