import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListFormAutocompleteSingleCryptoChipsComponent } from './list-form-autocomplete-single-crypto-chips.component';

@NgModule({
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, CommonModule, MatAutocompleteModule, MatOptionModule, MatChipsModule, MatProgressSpinnerModule],
  declarations: [ListFormAutocompleteSingleCryptoChipsComponent],
  providers: [],
  exports: [ListFormAutocompleteSingleCryptoChipsComponent]
})
export class ListFormAutocompleteSingleCryptoChipsComponentModule {
}
