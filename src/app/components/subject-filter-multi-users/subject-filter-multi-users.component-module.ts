import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectFilterMultiUsersComponent } from './subject-filter-multi-users.component';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatProgressBarModule, MatProgressSpinnerModule],
  declarations: [SubjectFilterMultiUsersComponent],
  providers: [],
  exports: [SubjectFilterMultiUsersComponent]
})
export class SubjectFilterMultiUsersComponentModule {
}
