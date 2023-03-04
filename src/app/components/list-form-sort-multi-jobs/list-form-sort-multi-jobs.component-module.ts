import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ListFormSortMultiJobsComponent } from './list-form-sort-multi-jobs.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, CommonModule, MatProgressSpinnerModule, MatListModule, MatInputModule, MatButtonModule],
  declarations: [ListFormSortMultiJobsComponent],
  providers: [],
  exports: [ListFormSortMultiJobsComponent]
})
export class ListFormSortMultiJobsComponentModule {
}
