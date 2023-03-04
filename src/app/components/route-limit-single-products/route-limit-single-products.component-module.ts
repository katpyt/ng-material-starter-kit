import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouteLimitSingleProductsComponent } from './route-limit-single-products.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [MatButtonToggleModule, ReactiveFormsModule, CommonModule, MatButtonModule, MatMenuModule, MatIconModule, MatListModule, RouterLink],
  declarations: [RouteLimitSingleProductsComponent],
  providers: [],
  exports: [RouteLimitSingleProductsComponent]
})
export class RouteLimitSingleProductsComponentModule {
}
