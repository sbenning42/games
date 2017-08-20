import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Game } from '../models/game';

@Injectable()
export class GameService {

  url = '/games'

  constructor(
    private http: HttpService
  ) { }

  get(): Observable<Game[]> {
    return this.http.get(this.url)
  }

}
