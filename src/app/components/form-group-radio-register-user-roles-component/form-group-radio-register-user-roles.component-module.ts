import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroupRadioRegisterUserRolesComponent } from './form-group-radio-register-user-roles.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatRadioModule],
  declarations: [FormGroupRadioRegisterUserRolesComponent],
  providers: [],
  exports: [FormGroupRadioRegisterUserRolesComponent]
})
export class FormGroupRadioRegisterUserRolesComponentModule {
}
