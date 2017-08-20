import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  baseUrl = 'http://api.games.dev/api';
  options;

  constructor(
    private httpOld: Http,
    private http: HttpClient
  ) {
    this.options = {
      headers : this._headers()
    }
  }

  private _headers() {
    const token = localStorage.getItem('token')
    return new HttpHeaders()
      .set('Accept', 'Application/json')
      .set('Authorization', `Bearer ${token}`)
  }

  errorHandle(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log(`Http error:\t${err.error.message}`)
    } else {
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
  }

  errorHandleOld(err) {
      console.log(`Http error:\t${JSON.stringify(err)}`);
  }

  get(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path, {headers : this._headers()})
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + path, data, {headers : this._headers()})
  }

  put(path: string, data: any): Observable<any> {
    return this.http.put(this.baseUrl + path, data, {headers : this._headers()})
  }

  delete(path: string): Observable<any> {
    return this.http.delete(this.baseUrl + path, {headers : this._headers()})
  }

  getOld(path: string): Observable<any> {
    return this.httpOld.get(this.baseUrl + path, this.options).map((response) => response.json())
  }

  postOld(path: string, data: any): Observable<any> {
    return this.httpOld.post(this.baseUrl + path, data, this.options).map((response) => response.json())
  }

}
