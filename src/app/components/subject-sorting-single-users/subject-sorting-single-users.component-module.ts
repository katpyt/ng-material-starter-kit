import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectSortingSingleUsersComponent } from './subject-sorting-single-users.component';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatProgressSpinnerModule],
  declarations: [SubjectSortingSingleUsersComponent],
  providers: [],
  exports: [SubjectSortingSingleUsersComponent]
})
export class SubjectSortingSingleUsersComponentModule {
}
