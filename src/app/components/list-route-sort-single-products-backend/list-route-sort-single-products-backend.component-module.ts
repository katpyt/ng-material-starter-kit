import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListRouteSortSingleProductsBackendComponent } from './list-route-sort-single-products-backend.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatChipsModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, RouterModule],
  declarations: [ListRouteSortSingleProductsBackendComponent],
  providers: [],
  exports: [ListRouteSortSingleProductsBackendComponent]
})

export class ListRouteSortSingleProductsBackendComponentModule {
}
