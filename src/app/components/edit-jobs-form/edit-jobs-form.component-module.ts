import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditJobsFormComponent } from './edit-jobs-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  declarations: [EditJobsFormComponent],
  providers: [],
  exports: [EditJobsFormComponent]
})
export class EditJobsFormComponentModule {
}
