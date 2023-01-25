import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectVoidExternalDeleteCountryComponent } from './subject-void-external-delete-country.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule],
  declarations: [SubjectVoidExternalDeleteCountryComponent],
  providers: [],
  exports: [SubjectVoidExternalDeleteCountryComponent]
})
export class SubjectVoidExternalDeleteCountryComponentModule {
}
