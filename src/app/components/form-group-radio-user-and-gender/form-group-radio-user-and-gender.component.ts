import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { UserWithGenderService } from '../../services/user-with-gender.service';

@Component({
  selector: 'app-form-group-radio-user-and-gender',
  styleUrls: ['./form-group-radio-user-and-gender.component.scss'],
  templateUrl: './form-group-radio-user-and-gender.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormGroupRadioUserAndGenderComponent {
  readonly genderList$ = of(["male", "female"]);

  readonly registerUserForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  constructor(private _userWithGenderService: UserWithGenderService) {
  }

  onRegisterUserSubmitted(registerUserForm: FormGroup): void {
    this._userWithGenderService.createUserWithGender({
      firstName: registerUserForm.get('firstName')?.value,
      lastName: registerUserForm.get('lastName')?.value,
      gender: registerUserForm.get('gender')?.value
    }).subscribe();
  }
}
