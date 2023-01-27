import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailsProductComponent } from './details-product.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [DetailsProductComponent],
  providers: [],
  exports: [DetailsProductComponent]
})
export class DetailsProductComponentModule {
}
