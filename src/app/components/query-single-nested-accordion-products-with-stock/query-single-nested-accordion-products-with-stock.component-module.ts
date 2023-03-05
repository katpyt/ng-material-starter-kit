import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QuerySingleNestedAccordionProductsWithStockComponent } from './query-single-nested-accordion-products-with-stock.component';

@NgModule({
  imports: [MatExpansionModule, CommonModule, MatProgressSpinnerModule],
  declarations: [QuerySingleNestedAccordionProductsWithStockComponent],
  providers: [],
  exports: [QuerySingleNestedAccordionProductsWithStockComponent]
})
export class QuerySingleNestedAccordionProductsWithStockComponentModule {
}
