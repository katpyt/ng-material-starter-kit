import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoTableComponent } from './crypto-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule],
  declarations: [CryptoTableComponent],
  providers: [],
  exports: [CryptoTableComponent]
})
export class CryptoTableComponentModule {
}
