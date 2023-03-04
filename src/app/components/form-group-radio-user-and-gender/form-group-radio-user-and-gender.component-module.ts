import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroupRadioUserAndGenderComponent } from './form-group-radio-user-and-gender.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatRadioModule],
  declarations: [FormGroupRadioUserAndGenderComponent],
  providers: [],
  exports: [FormGroupRadioUserAndGenderComponent]
})
export class FormGroupRadioUserAndGenderComponentModule {
}
