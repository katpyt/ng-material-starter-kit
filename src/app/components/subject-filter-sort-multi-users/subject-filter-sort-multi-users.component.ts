import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRolesModel } from '../../models/user-roles.model';
import { DepartmentModel } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';
import { UserRolesService } from '../../services/user-roles.service';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-subject-filter-sort-multi-users',
  styleUrls: ['./subject-filter-sort-multi-users.component.scss'],
  templateUrl: './subject-filter-sort-multi-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectFilterSortMultiUsersComponent {
  readonly sortDirections$: Observable<string[]> = of(['asc', 'desc']);
  readonly roleList$: Observable<UserRolesModel[]> = this._userRolesService.getUserRoles();
  readonly departmentList$: Observable<DepartmentModel[]> = this._departmentService.getAllDepartments();

  private _selectedSortDirectionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedSortDirection$: Observable<string> = this._selectedSortDirectionSubject.asObservable();

  private _selectedRoleSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  public selectedRole$: Observable<number | undefined> = this._selectedRoleSubject.asObservable();
  
  private _selectedDeptSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  public selectedDept$: Observable<number | undefined> = this._selectedDeptSubject.asObservable();

  constructor(private _departmentService: DepartmentService, private _userRolesService: UserRolesService, private _userService: UserService) {
  }

  readonly userList$: Observable<UserModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this.selectedSortDirection$,
    this.selectedRole$,
    this.selectedDept$    
  ]).pipe(
    map(([list, sortDirecion, role, dept]) => {

      // let newList: UserModel[] = list;

      // newList = newList.filter((user) => {
      //   return role ? user.roleId === role : true
      // });
      // newList = newList.filter((user) => {
      //   return dept ? user.departmentId === dept : true
      // });

      // newList.sort((a, b) => {
      //   if (sortDirecion.length === 0) return 1;
      //   return sortDirecion === 'desc' ? (a.email > b.email ? -1 : 1) : (a.email > b.email ? 1 : -1)
      // });

      // return newList;

      if (!sortDirecion && !role && !dept) return list;

      return list.filter((user) => {
        return role ? user.roleId === role : true;
      }).filter((user) => {
        return dept ? user.departmentId === dept : true;
      }).sort((a, b) => {
        return sortDirecion === 'asc'
          ? a.email?.toLowerCase() > b.email?.toLowerCase() ? 1 : -1
          : a.email?.toLowerCase() > b.email?.toLowerCase() ? -1 : 1
      })
    })
  );

  onSortingDirectionChanged(sortDirection: string) {
    this._selectedSortDirectionSubject.next(sortDirection);
  }

  onFilteringRoleChanged(roleId: number) {
    this._selectedRoleSubject.next(roleId);
  }

  onFilteringDeptChanged(deptId: string) {
    console.log("deptId [" + deptId + "]");
    this._selectedDeptSubject.next(parseInt(deptId));
  }
}
