import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchRouteMultiJobsComponent } from './search-route-multi-jobs.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RouterModule, MatTableModule, MatProgressSpinnerModule],
  declarations: [SearchRouteMultiJobsComponent],
  providers: [],
  exports: [SearchRouteMultiJobsComponent]
})
export class SearchRouteMultiJobsComponentModule {
}
