import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from '../interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  logIn(user: IAuth): Observable<IAuth> {
    return this.http.post<IAuth>('http://localhost:3000/signin', user);
  }
  signup(user: IAuth): Observable<IAuth> {
    return this.http.post<IAuth>('http://localhost:3000/signup', user);
  }
}
