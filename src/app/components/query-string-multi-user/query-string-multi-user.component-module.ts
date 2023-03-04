import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QueryStringMultiUserComponent } from './query-string-multi-user.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [QueryStringMultiUserComponent],
  providers: [],
  exports: [QueryStringMultiUserComponent]
})
export class QueryStringMultiUserComponentModule {
}
