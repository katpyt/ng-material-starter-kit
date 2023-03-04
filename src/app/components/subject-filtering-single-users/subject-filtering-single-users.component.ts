import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { UserRolesModel } from '../../models/user-roles.model';
import { UserModel } from '../../models/user.model';
import { UserRolesService } from '../../services/user-roles.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-subject-filtering-single-users',
  styleUrls: ['./subject-filtering-single-users.component.scss'],
  templateUrl: './subject-filtering-single-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectFilteringSingleUsersComponent {
  readonly roleList$: Observable<UserRolesModel[]> = this._userRolesService.getUserRoles();

  private _selectedRoleIdSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  public selectedRoleId$: Observable<number | undefined> = this._selectedRoleIdSubject.asObservable();

  readonly userList$: Observable<UserModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this.selectedRoleId$
  ]).pipe(
    map(([list, selectedRoleId]) => {
      if (!selectedRoleId) return list;
      return list.filter((user) => {
        return user.roleId == selectedRoleId
      })
    })
  );

  constructor(private _userRolesService: UserRolesService, private _userService: UserService) {
  }

  onFilteringRoleChanged(roleId: number): void {
    this._selectedRoleIdSubject.next(roleId);
  }
}
