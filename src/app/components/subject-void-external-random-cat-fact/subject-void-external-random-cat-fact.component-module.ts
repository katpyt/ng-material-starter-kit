import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { SubjectVoidExternalRandomCatFactComponent } from './subject-void-external-random-cat-fact.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule],
  declarations: [SubjectVoidExternalRandomCatFactComponent],
  providers: [],
  exports: [SubjectVoidExternalRandomCatFactComponent]
})
export class SubjectVoidExternalRandomCatFactComponentModule {
}
