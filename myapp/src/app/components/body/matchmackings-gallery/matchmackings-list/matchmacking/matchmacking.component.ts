import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../../services/auth.service';
import { Matchmacking } from '../../../../../models/matchmacking';
import { MatchmackingService } from '../../../../../services/matchmacking.service';

@Component({
  selector: 'app-matchmacking',
  templateUrl: './matchmacking.component.html',
  styleUrls: ['./matchmacking.component.css']
})
export class MatchmackingComponent implements OnInit {

  isMine: boolean;
  @Input() matchmacking: Matchmacking;
  constructor(
    private authService: AuthService,
    private matchmackingService: MatchmackingService,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.authService.getId()
    this.isMine = this.matchmacking['user_id'] == id
  }

  join() {
    this.matchmackingService.put(this.matchmacking).subscribe(
      (response) => {
        localStorage.setItem('matchId', response['id']);
        this.router.navigate(['/match'])},
      (errors) => {console.log(<any>errors)},
      () => {})
  }

  delete() {
    this.matchmackingService.del(this.matchmacking).subscribe(
      (success) => {},
      (errors) => {console.log(<any>errors)},
      () => {})
  }

  mine() {
    return this.isMine
  }

}
