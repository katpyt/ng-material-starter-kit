import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { QuerySingleNestedSequentialListProductsWithCategoriesComponent } from './query-single-nested-sequential-list-products-with-categories.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, MatChipsModule, MatCardModule],
  declarations: [QuerySingleNestedSequentialListProductsWithCategoriesComponent],
  providers: [],
  exports: [QuerySingleNestedSequentialListProductsWithCategoriesComponent]
})
export class QuerySingleNestedSequentialListProductsWithCategoriesComponentModule {
}
