import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserFullModel } from '../models/user-full.model';

@Injectable({ providedIn: 'root' })

export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllUsers(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/user');
  }

  getOneUser(userId: number): Observable<UserFullModel> {
    return this._httpClient.get<UserFullModel>('https://fakestoreapi.com/users/' + userId);
  }
}
