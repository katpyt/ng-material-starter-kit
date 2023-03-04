import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserFullModel } from '../models/user-full.model';

@Injectable({ providedIn: 'root' })

export class UserFullService {
  constructor(private _httpClient: HttpClient) {
  }

  addUserFull(userUserFullModel: Omit<UserFullModel, 'id'>): Observable<UserFullModel> {
    return this._httpClient.post<UserFullModel>('https://fakestoreapi.com/users', userUserFullModel);
  }
}
