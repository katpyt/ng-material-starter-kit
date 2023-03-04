import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectFilteringSingleUsersComponent } from './subject-filtering-single-users.component';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatProgressSpinnerModule],
  declarations: [SubjectFilteringSingleUsersComponent],
  providers: [],
  exports: [SubjectFilteringSingleUsersComponent]
})
export class SubjectFilteringSingleUsersComponentModule {
}
