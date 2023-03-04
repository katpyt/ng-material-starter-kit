import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserRolesService } from '../../services/user-roles.service';
import { DepartmentService } from '../../services/department.service';
import { UserRolesModel } from 'src/app/models/user-roles.model';
import { UserRoleDepartmentQueryModel } from 'src/app/queries/user-role-department.query-model';
import { DepartmentModel } from 'src/app/models/department.model';

@Component({
  selector: 'app-query-string-multi-user',
  templateUrl: './query-string-multi-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class QueryStringMultiUserComponent {

  constructor(private _userService: UserService, private _userRolesService: UserRolesService, private _departmentService: DepartmentService) {
  }

  readonly userList$: Observable<UserRoleDepartmentQueryModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this._userRolesService.getUserRoles(),
    this._departmentService.getAllDepartments()
  ]).pipe(
    map(([users, roles, depts]) => {
      const rolesMap: Record<number, UserRolesModel> = roles.reduce((a, b) => ({ ...a, [b.id]: b }), {});
      const deptMap: Record<string, DepartmentModel> = depts.reduce((a, b) => ({ ...a, [b.id]: b }), {});

      return users.map(user => ({
        userMail: user.email,
        role: rolesMap[user.roleId]?.role,
        department: deptMap[user.departmentId]?.name
      }))

    })
  )
}
