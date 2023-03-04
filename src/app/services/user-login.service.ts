import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginModel } from '../models/user-login.model';

@Injectable({ providedIn: 'root' })
export class UserLoginService {
  constructor(private _httpClient: HttpClient) {
  }

  login(userLogin: UserLoginModel): Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/auth/login', userLogin);
  }
}
