import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListFormSearchMultiProductComponent } from './list-form-search-multi-product.component';

@NgModule({
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, CommonModule, MatListModule, MatProgressSpinnerModule],
  declarations: [ListFormSearchMultiProductComponent],
  providers: [],
  exports: [ListFormSearchMultiProductComponent]
})
export class ListFormSearchMultiProductComponentModule {
}
