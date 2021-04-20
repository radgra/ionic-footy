import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldCupService {
  worldCups = [
    {
      title:"Russia 2018",
      image:"assets/2018logo.png",
      year:2018
    },
    {
      title:"Germany 2006",
      image:"assets/2006logo.png",
      year:2006
    },
    {
      title:"Korea and Japan 2002",
      image:"assets/2002logo.png",
      year:2002
    },
    {
      title:"Mexico 1986",
      image:"assets/1986logo.png",
      year:1986      
    },
    {
      title:"Spain 1982",
      image:"assets/1982logo.png",
      year:1982
      
    },
    {
      title:"Argentina 1978",
      image:"assets/1978.png",
      year:1978
    },
    {
      title:"West Germany 1974",
      image:"assets/1974.png",
      year:1974
    },
    {
      title:"France 1938",
      image:"assets/1938.jpg",
      year:1938
    },
    
  ]

  constructor() { }

  getWorldCups() {
    return of(this.worldCups)
  }
  
  getWorldCup(year:Number) {
    //Todo - how to do pattern load only once with rxjs
    const foundWc = this.worldCups.find(wc => wc.year === year)
    return of(foundWc)
  }
}
