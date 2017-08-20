import { Component, OnInit } from '@angular/core';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router'

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Matchmacking } from '../../../models/matchmacking';
import { MatchmackingService } from '../../../services/matchmacking.service';
import { Game } from '../../../models/game';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-matchmacking-form',
  templateUrl: './matchmacking-form.component.html',
  styleUrls: ['./matchmacking-form.component.css']
})
export class MatchmackingFormComponent implements OnInit {

  idCtrl: FormControl;

  gameForm: FormGroup;
  gameId: number;

  games: Observable<Game[]>;

  constructor(
    private fb: FormBuilder,
    private matchmackingService: MatchmackingService,
    private gameService: GameService,
    private router: Router
  ) {

    this.idCtrl = fb.control('', [Validators.required]);

    this.gameForm = fb.group({
      gameId : this.idCtrl,
    });

  }

  ngOnInit() {
    this.games = this.gameService.get()
  }

  add() {
    if (this.gameForm.valid) {
      this.matchmackingService.post({game_id : this.gameId})
      .flatMap(response => {
          const id = response.id
          return this.matchmackingService.getGuest(id)
            .repeatWhen(c => c.debounceTime(2000))
            .skipWhile(resp => resp.guest_id == null)
            .take(1)
            /*.flatMapTo(this.matchmackingService.getMatch(id))*/})
      .subscribe(
        (response) => {
          localStorage.setItem('matchId', response.id);
          this.router.navigate(['/match'])},
        (errors) => {console.log(<any>errors)},
        () => {})
    } else {
      console.log(this.gameForm.value)
    }
  }

}
