import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../models/User';

@Injectable()
export class AuthService {


  static user: User;

  constructor(
    private http: HttpService
  ) { }

  isLogged() {
    const resp = localStorage.getItem('token') ? true : false
    return resp
  }

  getId() {
    return localStorage.getItem('userId')
  }

  register(user: User): Observable<User> {
    return this.http.post('/register', user)
  }

  login(user: User): Subscription {
    return this.http.post('/login', user).subscribe(
      (response) => {localStorage.setItem('token', response['token']); localStorage.setItem('userId', response['userId'])},
      (errors) => {console.log(<any>errors)},
      () => {})
  }

  logout(): Observable<any> {
    const resp = this.http.post('/logout', {})
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('matchId')
    localStorage.removeItem('gameId')
    localStorage.removeItem('hostId')
    localStorage.removeItem('guestId')
    return resp
  }

}
