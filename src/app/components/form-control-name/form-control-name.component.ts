import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-name',
  styleUrls: ['./form-control-name.component.scss'],
  templateUrl: './form-control-name.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FormControlNameComponent {
  readonly nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  readonly ageControl = new FormControl(18, [Validators.required, Validators.min(18)]);
  readonly mailControl = new FormControl('', [Validators.required, Validators.email]);
  readonly commentControl = new FormControl('', [Validators.required, Validators.pattern('(\w+){4,}')]);

  onNameSubmitted(nameControl: FormControl): void {
  }
}
