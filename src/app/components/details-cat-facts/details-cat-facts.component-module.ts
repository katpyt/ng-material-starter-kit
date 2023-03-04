import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { DetailsCatFactsComponent } from './details-cat-facts.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatCardModule],
  declarations: [DetailsCatFactsComponent],
  providers: [],
  exports: [DetailsCatFactsComponent]
})
export class DetailsCatFactsComponentModule {
}
