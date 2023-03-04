import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListFormFilterSingleProductsRadioComponent } from './list-form-filter-single-products-radio.component';

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, MatListModule, MatProgressSpinnerModule],
  declarations: [ListFormFilterSingleProductsRadioComponent],
  providers: [],
  exports: [ListFormFilterSingleProductsRadioComponent]
})
export class ListFormFilterSingleProductsRadioComponentModule {
}
