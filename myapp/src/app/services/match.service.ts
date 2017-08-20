import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatchService {

  url = '/match/'
  constructor(
    private http: HttpService
  ) { }

  get(id: number): Observable<any> {
    return this.http.get(this.url + id)
  }

  put(id: number, move): Observable<any> {
    return this.http.put(this.url + id, move)
  }
}
