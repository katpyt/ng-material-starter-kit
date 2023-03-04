import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectPaginationBeBeersComponent } from './subject-pagination-be-beers.component';

@NgModule({
  imports: [MatPaginatorModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [SubjectPaginationBeBeersComponent],
  providers: [],
  exports: [SubjectPaginationBeBeersComponent]
})
export class SubjectPaginationBeBeersComponentModule {
}
