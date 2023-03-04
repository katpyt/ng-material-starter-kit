import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, of, shareReplay, startWith } from 'rxjs';
import { UserRolesModel } from '../../models/user-roles.model';
import { DepartmentModel } from '../../models/department.model';
import { UserModel } from '../../models/user.model';
import { UserRolesService } from '../../services/user-roles.service';
import { DepartmentService } from '../../services/department.service';
import { UserService } from '../../services/user.service';
import { UserWithDeptAndRoleNamesModel } from 'src/app/models/user-with-dept-and-role-names.model';

@Component({
  selector: 'app-list-form-filter-multi-users',
  styleUrls: ['./list-form-filter-multi-users.component.scss'],
  templateUrl: './list-form-filter-multi-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ListFormFilterMultiUsersComponent {
  readonly rolesList$: Observable<UserRolesModel[]> = this._userRolesService.getUserRoles().pipe(shareReplay(1));
  readonly departmentsList$: Observable<DepartmentModel[]> = this._departmentService.getAllDepartments().pipe(shareReplay(1));

  readonly form: FormGroup = new FormGroup({
    department: new FormControl(),
    role: new FormControl()
  });

  readonly usersList$: Observable<UserWithDeptAndRoleNamesModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this.form.valueChanges.pipe(startWith({ department: '', role: '' })),
    this.rolesList$,
    this.departmentsList$
  ]).pipe(
    map(([list, orderForm, roles, departments]: [UserModel[], { department: string, role: string }, UserRolesModel[], DepartmentModel[]]) => {

      if (!orderForm) return [];

      const roleMap: Record<string, string> = roles.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.role };
        }, {}
      );

      const roleDept: Record<string, string> = departments.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.name };
        }, {}
      );

      return list.filter(
        (user) => {
          return user.departmentId == +orderForm.department && user.roleId === +orderForm.role
        }
      )
        //   .map((user) => {
        //   return {
        //     id: user.id,
        //     email: user.email,
        //     departmentName: departments.filter(dept => +dept.id === user.departmentId)[0].name,
        //     roleName: roles.filter(role => role.id === user.roleId)[0].role
        //   }
        // })
        .map(user => {
          return {
            id: user.id,
            email: user.email,
            roleName: roleMap[user.roleId],
            departmentName: roleDept[user.departmentId]
          }
        })
    })
  );

  constructor(private _userRolesService: UserRolesService, private _departmentService: DepartmentService, private _userService: UserService) {
  }

}
