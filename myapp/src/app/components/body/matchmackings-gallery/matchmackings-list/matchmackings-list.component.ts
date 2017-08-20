import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Matchmacking } from '../../../../models/matchmacking';
import { MatchmackingService } from '../../../../services/matchmacking.service';

@Component({
  selector: 'app-matchmackings-list',
  templateUrl: './matchmackings-list.component.html',
  styleUrls: ['./matchmackings-list.component.css']
})
export class MatchmackingsListComponent implements OnInit {

  matchmackings: Observable<Matchmacking[]>
  constructor(
    private matchmackingService: MatchmackingService
  ) { }

  ngOnInit() {
    this.matchmackings = this.matchmackingService.get()
      .repeatWhen(c => c.debounceTime(2000))
  }

}

