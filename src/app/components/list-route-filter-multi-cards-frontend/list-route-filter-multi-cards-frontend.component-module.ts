import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListRouteFilterMultiCardsFrontendComponent } from './list-route-filter-multi-cards-frontend.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule, MatCheckboxModule, ReactiveFormsModule, RouterLink],
  declarations: [ListRouteFilterMultiCardsFrontendComponent],
  providers: [],
  exports: [ListRouteFilterMultiCardsFrontendComponent]
})
export class ListRouteFilterMultiCardsFrontendComponentModule {
}
