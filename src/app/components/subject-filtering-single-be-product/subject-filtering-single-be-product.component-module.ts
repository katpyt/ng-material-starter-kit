import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectFilteringSingleBeProductComponent } from './subject-filtering-single-be-product.component';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatProgressSpinnerModule],
  declarations: [SubjectFilteringSingleBeProductComponent],
  providers: [],
  exports: [SubjectFilteringSingleBeProductComponent]
})
export class SubjectFilteringSingleBeProductComponentModule {
}
