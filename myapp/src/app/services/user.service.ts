import { Injectable } from '@angular/core';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { User } from '../models/user';

@Injectable()
export class UserService {

  ready: boolean;
  users: User[];
  path = '/users'

  constructor(
    private http: HttpService
  ) { }

  get(filterFunc: (user: User) => boolean): Observable<any> {
    return this.http.get(this.path)
      .map((response) => response.filter(filterFunc))
  }

  post(user: User): Observable<any> {
    return this.http.post(this.path, user)
  }

}
