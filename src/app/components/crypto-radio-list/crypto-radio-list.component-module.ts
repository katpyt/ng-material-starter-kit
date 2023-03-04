import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoRadioListComponent } from './crypto-radio-list.component';

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CryptoRadioListComponent],
  providers: [],
  exports: [CryptoRadioListComponent]
})
export class CryptoRadioListComponentModule {
}
