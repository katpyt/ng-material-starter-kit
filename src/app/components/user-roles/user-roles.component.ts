import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRolesService } from 'src/app/services/user-roles.service';
import { UserRolesModel } from '../../models/user-roles.model';

@Component({
  selector: 'app-user-roles',
  styleUrls: ['./user-roles.component.scss'],
  templateUrl: './user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRolesComponent {
  readonly userRoleControl = new FormControl('', [Validators.required]);
  readonly userRolesList$: Observable<UserRolesModel[]> = this._userRolesService.getUserRoles();


  constructor(private _userRolesService: UserRolesService) {
  }
 
}
