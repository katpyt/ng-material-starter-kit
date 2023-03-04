import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-user-login',
  styleUrls: ['./user-login.component.scss'],
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent {
  readonly userLoginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private _userLoginService: UserLoginService) {
  }

  onUserLoginFormSubmitted(userLoginForm: FormGroup): void {
    if (!userLoginForm.valid) {
      return;
    }

    this._userLoginService.login({
      username: userLoginForm.get('username')?.value,
      password: userLoginForm.get('password')?.value
    }).subscribe();
  }
}
