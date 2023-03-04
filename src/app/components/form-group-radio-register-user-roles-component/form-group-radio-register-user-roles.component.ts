import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRolesModel } from '../../models/user-roles.model';
import { UserRolesService } from '../../services/user-roles.service';

@Component({
  selector: 'app-form-group-radio-register-user-roles',
  styleUrls: ['./form-group-radio-register-user-roles.component.scss'],
  templateUrl: './form-group-radio-register-user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupRadioRegisterUserRolesComponent {
  readonly roleList$: Observable<UserRolesModel[]> = this._userRolesService.getUserRoles();

  readonly addRoleToUserForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required])
  });

  constructor(private _userRolesService: UserRolesService) {
  }

  onAddRoleToUserFormSubmitted(addRoleToUserForm: FormGroup): void {
    this._userRolesService.addRoleToUser({
      email: addRoleToUserForm.get('email')?.value,
      roleId: addRoleToUserForm.get('role')?.value
    }).subscribe();
  }
}
