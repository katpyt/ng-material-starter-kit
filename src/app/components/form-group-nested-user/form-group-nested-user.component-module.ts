import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroupNestedUserComponent } from './form-group-nested-user.component';

@NgModule({
  imports: [ReactiveFormsModule, MatInputModule, CommonModule, MatButtonModule],
  declarations: [FormGroupNestedUserComponent],
  providers: [],
  exports: [FormGroupNestedUserComponent]
})
export class FormGroupNestedUserComponentModule {
}
