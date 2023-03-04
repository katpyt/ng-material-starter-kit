import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { ListFormAutocompleteMultiCarsComponent } from './list-form-autocomplete-multi-cars.component';

@NgModule({
  imports: [CommonModule, MatTableModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatOptionModule],
  declarations: [ListFormAutocompleteMultiCarsComponent],
  providers: [],
  exports: [ListFormAutocompleteMultiCarsComponent]
})
export class ListFormAutocompleteMultiCarsComponentModule {
}
