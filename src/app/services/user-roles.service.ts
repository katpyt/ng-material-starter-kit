import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, distinct, filter, map, Observable } from 'rxjs';
import { UserRolesModel } from '../models/user-roles.model';
import { UserAddRoleModel } from '../models/user-add-role.model';

@Injectable({ providedIn: 'root' })
export class UserRolesService {
  constructor(private _httpClient: HttpClient) {
  }

  getUserRoles(): Observable<UserRolesModel[]> {
    return this._httpClient.get<UserRolesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles')
      .pipe(
        map(roleList => roleList.filter(roleItem => roleItem.role !== "")),
        catchError(() => [])
      );
  }

  // getUserRoles(): Observable<any[]> {
  //   return this._httpClient.get<any[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles')
  //     .pipe(
  //       map(roleList => [{
  //         "id":1,"role": {"id":1,"role":"user"}
  //       }]),
  //       map(roleList => roleList.filter(roleItem => typeof(roleItem) == "string" ))
  //     );
  // }

  addRoleToUser(userRole: UserAddRoleModel): Observable<void> {
    return this._httpClient.post<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/user', userRole);
  }
}
