import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListFormSortSingleProductsComponent } from './list-form-sort-single-products.component';

@NgModule({
  imports: [ReactiveFormsModule, MatListModule, CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatProgressSpinnerModule],
  declarations: [ListFormSortSingleProductsComponent],
  providers: [],
  exports: [ListFormSortSingleProductsComponent]
})
export class ListFormSortSingleProductsComponentModule {
}
