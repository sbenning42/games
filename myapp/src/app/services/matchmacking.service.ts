import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Matchmacking } from '../models/matchmacking'

@Injectable()
export class MatchmackingService {

  url = '/matchmackings'

  constructor(
    private http: HttpService
  ) { }

  get(): Observable<Matchmacking[]> {
    return this.http.get(this.url)
  }

  getGuest(id): Observable<any> {
    return this.http.get(`/matchmackings/${id}`)
  }

  getMatch(id): Observable<any> {
    return this.http.get(`/match/${id}`)
  }

  post(mM: Matchmacking): Observable<any> {
    return this.http.post(this.url, mM)
  }

  put(mM: Matchmacking): Observable<Matchmacking>  {
    return this.http.put(`${this.url}/${mM['id']}`, mM)
  }

  del(mM: Matchmacking): Observable<any>  {
    return this.http.delete(`${this.url}/${mM['id']}`)
  }

}
