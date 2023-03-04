import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { UserRolesModel } from '../../models/user-roles.model';
import { DepartmentModel } from '../../models/department.model';
import { UserModel } from '../../models/user.model';
import { UserRolesService } from '../../services/user-roles.service';
import { DepartmentService } from '../../services/department.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-subject-filter-multi-users',
  styleUrls: ['./subject-filter-multi-users.component.scss'],
  templateUrl: './subject-filter-multi-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectFilterMultiUsersComponent {
  readonly roleList$: Observable<UserRolesModel[]> = this._userRolesService.getUserRoles();
  readonly departmentList$: Observable<DepartmentModel[]> = this._departmentService.getAllDepartments();


  private _selectedRoleSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  public selectedRole$: Observable<number | undefined> = this._selectedRoleSubject.asObservable();

  private _selectedDeptSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  public selectedDept$: Observable<string | undefined> = this._selectedDeptSubject.asObservable();

  readonly userList$: Observable<UserModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this.selectedRole$,
    this.selectedDept$,
  ]).pipe(
    map(
      ([list, selectedRole, selectedDept]) => {
        if (!selectedRole && !selectedDept) return list;

        return list.filter((user) => {
          return selectedRole ? user.roleId === selectedRole : true
        }).filter((user) => {
          return selectedDept ? user.departmentId.toString() === selectedDept : true
        })        
      }
    )
  );


  constructor(private _userRolesService: UserRolesService, private _departmentService: DepartmentService, private _userService: UserService) {
  }

  onRoleFilteringChange(roleId: number): void {
    this._selectedRoleSubject.next(roleId);
  }

  onDeptFilteringChange(deptId: string): void {
    this._selectedDeptSubject.next(deptId);
  }
}
