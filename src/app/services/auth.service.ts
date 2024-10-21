import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../interface/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http : HttpClient) { }
  signup (user : IUser) : Observable<IUser> { 
    return this.http.post<IUser>('http://localhost:3000/signup', user);
  }
  signin (user : IUser) : Observable<IUser> { 
    return this.http.post<IUser>('http://localhost:3000/signin', user);
  }
}
