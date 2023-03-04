import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectSortingSingleProductComponent } from './subject-sorting-single-product.component';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatProgressSpinnerModule],
  declarations: [SubjectSortingSingleProductComponent],
  providers: [],
  exports: [SubjectSortingSingleProductComponent]
})
export class SubjectSortingSingleProductComponentModule {
}
