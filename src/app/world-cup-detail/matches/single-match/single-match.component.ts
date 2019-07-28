import { Match } from './../../../models/match.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.scss'],
})
export class SingleMatchComponent implements OnInit {
  @Input() match:Match
  constructor() { }

  ngOnInit() {}

}
