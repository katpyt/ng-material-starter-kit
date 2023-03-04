import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-z]+[0-9]$')]),
    age: new FormControl(18, [Validators.min(18)]),
  });

constructor() {
  this.form.valueChanges.subscribe(formValue => console.log(formValue));
}

  onFormSubmitted(form: FormGroup): void {
    console.log(form.value);
  }
}
