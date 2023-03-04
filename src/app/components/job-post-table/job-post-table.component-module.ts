import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { JobPostTableComponent } from './job-post-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule],
  declarations: [JobPostTableComponent],
  providers: [],
  exports: [JobPostTableComponent]
})
export class JobPostTableComponentModule {
}
