import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { JobPostGridComponent } from './job-post-grid.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [JobPostGridComponent],
  providers: [],
  exports: [JobPostGridComponent]
})
export class JobPostGridComponentModule {
}
