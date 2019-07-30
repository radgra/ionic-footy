import { Component, OnInit, Input } from '@angular/core';
import { Squad } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-position-list',
  templateUrl: './player-position-list.component.html',
  styleUrls: ['./player-position-list.component.scss'],
})
export class PlayerPositionListComponent implements OnInit {
  @Input() positionName:string
  @Input() playersList:Squad []
  constructor() { }

  ngOnInit() {}

}
