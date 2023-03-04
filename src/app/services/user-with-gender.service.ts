import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserWithGenderModel } from '../models/user-with-gender.model';

@Injectable({ providedIn: 'root' })

export class UserWithGenderService {
  constructor(private _httpClient: HttpClient) {
  }

  createUserWithGender(userWithGender: UserWithGenderModel): Observable<void> {
    return this._httpClient.post<void>('https://63a2f6579704d18da081945f.mockapi.io/users', userWithGender);
  }
}
