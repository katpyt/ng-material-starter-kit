import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectSortingFieldCryptoComponent } from './subject-sorting-field-crypto.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, MatInputModule, MatButtonModule, FlexModule, MatProgressSpinnerModule],
  declarations: [SubjectSortingFieldCryptoComponent],
  providers: [],
  exports: [SubjectSortingFieldCryptoComponent]
})
export class SubjectSortingFieldCryptoComponentModule {
}
