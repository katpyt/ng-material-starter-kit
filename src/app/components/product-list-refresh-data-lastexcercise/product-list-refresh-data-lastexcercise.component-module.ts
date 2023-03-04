import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ProductListRefreshDataLastexcerciseComponent } from './product-list-refresh-data-lastexcercise.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule, MatGridListModule, MatTableModule, MatCardModule],
  declarations: [ProductListRefreshDataLastexcerciseComponent],
  providers: [],
  exports: [ProductListRefreshDataLastexcerciseComponent]
})
export class ProductListRefreshDataLastexcerciseComponentModule {
}
