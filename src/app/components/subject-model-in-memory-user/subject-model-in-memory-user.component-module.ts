import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectModelInMemoryUserComponent } from './subject-model-in-memory-user.component';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatIconModule],
  declarations: [SubjectModelInMemoryUserComponent],
  providers: [],
  exports: [SubjectModelInMemoryUserComponent]
})
export class SubjectModelInMemoryUserComponentModule {
}
