import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

import { User } from '../../../models/user';
import { Matchmacking } from '../../../models/matchmacking';
import { MatchmackingService } from '../../../services/matchmacking.service';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-morpion-game',
  templateUrl: './morpion-game.component.html',
  styleUrls: ['./morpion-game.component.css']
})
export class MorpionGameComponent implements OnInit {

  tiles = [
    {id: 0, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 1, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 2, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 3, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 4, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 5, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 6, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 7, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
    {id: 8, value: '', cols: 1, rows: 1, color: '', player: 0, last: false},
  ];

  currentPlayer: number;
  lastMove;
  winner: number;

  playing: boolean;

  @Input() match;
  @Input() playerId;

  constructor(
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit() {
    if ((this.currentPlayer = this.match.user.id) == this.playerId) {
      this.play()
    }
    this.matchService.get(this.match.id)
      .repeatWhen(c => c.debounceTime(2000))
      .subscribe(
        turn => {
          if (turn.winner && turn.winner['id'] && !this.winner) {
            this.end(turn)
          }
          if (this.currentPlayer != turn.current_player['id'] && turn.current_player['id'] == this.playerId) {
            this.render(JSON.parse(turn.last_move))
            this.play()
          }
          this.currentPlayer = turn.current_player['id'];
          this.lastMove = turn.last_move;
          this.winner = turn.winner ? turn.winner['id'] : 0;
        },
        errors => {console.log(<any>errors); this.router.navigate(['/home'])},
        () => {console.log('GET matchService subscription completed')}
      )
  }

  render(move) {
    console.log(`Have to render: ${JSON.stringify(move)}...`)
    if (move) {
      console.log('rendering')
      this.tiles[move.tileId].value = move.player == this.match.user.id ? 'X' : 'O'
    }
  }

  played(tile) {
    if (this.playing) {
      this.playing = false
      const myMove = {tileId: tile.id, player: this.playerId}
      this.render(myMove)
      this.matchService.put(this.match.id, myMove).subscribe(
        response => {},
        errors => {console.log(<any>errors)},
        () => {}
      )
    }
  }

  play() {
    this.playing = true;
  }

  end(turn) {
    console.log(`Game end. ${turn.winner['id']} wins!`)
  }

  getHint() {
    return this.playerId == this.currentPlayer ? 'You to play!' : `Wait for ${this.match.user.name} to play...`
  }

  playerColor() {
    return this.playerId == this.match.user.id ? 'primary' : 'accent'
  }

  tileColor(tile) {
    if (tile.id % 2) {
      return 'lightblue'
    } else {
      return 'lightgreen'
    }

  }

}
