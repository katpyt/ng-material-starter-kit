import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable, reduce } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserRolesModel } from '../../models/user-roles.model';
import { UserService } from '../../services/user.service';
import { UserRolesService } from '../../services/user-roles.service';
import { DisplayUserQueryModel } from 'src/app/models/display-user-query.model';

@Component({
  selector: 'app-query-string-single-user',
  styleUrls: ['./query-string-single-user.component.scss'],
  templateUrl: './query-string-single-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringSingleUserComponent {


  readonly userDisplayList$: Observable<DisplayUserQueryModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this._userRolesService.getUserRoles()
  ]).pipe(
    map(([users, roles]) => {
      const userRoleMap: Record<number, UserRolesModel> = roles.reduce((a, b) => ({ ...a, [b.id]: b }), {})

      return users.map((user) => ({
        id: user.id,
        email: user.email,
        role: userRoleMap[user.roleId]?.role
      }))
    })
  );


  constructor(private _userService: UserService, private _userRolesService: UserRolesService) {
  }
}
