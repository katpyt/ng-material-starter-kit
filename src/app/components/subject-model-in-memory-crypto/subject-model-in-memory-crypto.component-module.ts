import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectModelInMemoryCryptoComponent } from './subject-model-in-memory-crypto.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule],
  declarations: [SubjectModelInMemoryCryptoComponent],
  providers: [],
  exports: [SubjectModelInMemoryCryptoComponent]
})
export class SubjectModelInMemoryCryptoComponentModule {
}
