import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { ProductMultiListComponent } from './product-multi-list.component';

@NgModule({
  imports: [MatProgressSpinnerModule, MatListModule, CommonModule],
  declarations: [ProductMultiListComponent],
  providers: [],
  exports: [ProductMultiListComponent]
})
export class ProductMultiListComponentModule {
}
