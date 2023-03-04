import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectSortSingleBeProductComponent } from './subject-sort-single-be-product.component';

@NgModule({
  imports: [MatButtonModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [SubjectSortSingleBeProductComponent],
  providers: [],
  exports: [SubjectSortSingleBeProductComponent]
})
export class SubjectSortSingleBeProductComponentModule {
}
