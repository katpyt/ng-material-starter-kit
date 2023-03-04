import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ListRouteFilterSingleProductsBackendComponent } from './list-route-filter-single-products-backend.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatProgressSpinnerModule, MatProgressBarModule, RouterModule],
  declarations: [ListRouteFilterSingleProductsBackendComponent],
  providers: [],
  exports: [ListRouteFilterSingleProductsBackendComponent]
})
export class ListRouteFilterSingleProductsBackendComponentModule {
}
