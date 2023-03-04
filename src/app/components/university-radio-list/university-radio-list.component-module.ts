import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { UniversityRadioListComponent } from './university-radio-list.component';

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule],
  declarations: [UniversityRadioListComponent],
  providers: [],
  exports: [UniversityRadioListComponent]
})
export class UniversityRadioListComponentModule {
}
