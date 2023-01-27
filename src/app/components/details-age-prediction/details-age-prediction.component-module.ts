import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailsAgePredictionComponent } from './details-age-prediction.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailsAgePredictionComponent],
  providers: [],
  exports: [DetailsAgePredictionComponent]
})

export class DetailsAgePredictionComponentModule {
}
