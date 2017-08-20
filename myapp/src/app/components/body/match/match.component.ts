import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

import { User } from '../../../models/user';
import { Matchmacking } from '../../../models/matchmacking';
import { MatchmackingService } from '../../../services/matchmacking.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  matchId: number;
  userId: number;
  match: Matchmacking;
  me: User;

  constructor(
    private matchmackingService: MatchmackingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.matchId = parseInt(localStorage.getItem('matchId'), 10)
    this.userId = parseInt(localStorage.getItem('userId'), 10)
    this.matchmackingService.getGuest(this.matchId).subscribe(
      response => {
        this.match = response
        this.me = this.userId == response.user_id ? response.user : response.guest
      },
      errors => {console.log(<any>errors)},
      () => {})
  }

  deleteAndGoBack() {
    this.matchmackingService.del(this.matchId).subscribe(
      response => {this.router.navigate(['/home'])},
      errors => {console.log(<any>errors); this.router.navigate(['/home'])},
      () => {})
    localStorage.removeItem('matchId');
  }

  isHost() {
    if (this.match && this.match['user']) {
      return this.me['id'] == this.match['user'].id
    }
    return false
  }

  isGuest() {
    if (this.match && this.match['guest']) {
      return this.me['id'] == this.match['guest'].id
    }
    return false
  }

  hostColor() {
    return this.isHost() ? 'warn' : 'accent'
  }

  guestColor() {
    return this.isGuest() ? 'warn' : 'accent'
  }

}
