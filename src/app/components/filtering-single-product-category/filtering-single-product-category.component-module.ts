import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteringSingleProductCategoryComponent } from './filtering-single-product-category.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, FlexModule],
  declarations: [FilteringSingleProductCategoryComponent],
  providers: [],
  exports: [FilteringSingleProductCategoryComponent]
})
export class FilteringSingleProductCategoryComponentModule {
}
