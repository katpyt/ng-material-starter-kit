import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartDetailsComponent } from './cart-details.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [CartDetailsComponent],
  providers: [],
  exports: [CartDetailsComponent]
})
export class CartDetailsComponentModule {
}
