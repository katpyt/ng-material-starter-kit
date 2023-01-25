import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserWithAvatarModel } from '../models/user-with-avatar.model';

@Injectable({ providedIn: 'root' })


export class UserWithAvatarService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllUsers(): Observable<UserWithAvatarModel[]> {
    return this._httpClient.get<UserWithAvatarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/users-with-avatars');
  }
}
