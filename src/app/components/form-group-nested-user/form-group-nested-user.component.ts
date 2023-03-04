import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFullService } from '../../services/user-full.service';

@Component({
  selector: 'app-form-group-nested-user',
  styleUrls: ['./form-group-nested-user.component.scss'],
  templateUrl: './form-group-nested-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupNestedUserComponent {
  readonly addFullUser: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    }),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      geolocation: new FormGroup({
        lat: new FormControl('', [Validators.required]),
        long: new FormControl('', [Validators.required]),
      }),
    }),
    phone: new FormControl('', [Validators.required])
  });

  constructor(private _userFullService: UserFullService) {
  }

  onAddFullUserSubmitted(addFullUser: FormGroup): void {
    this._userFullService.addUserFull(addFullUser.value).subscribe();
  }
}
