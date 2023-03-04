import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QueryArraySingleJobComponent } from './query-array-single-job.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule, MatProgressSpinnerModule],
  declarations: [QueryArraySingleJobComponent],
  providers: [],
  exports: [QueryArraySingleJobComponent]
})
export class QueryArraySingleJobComponentModule {
}
