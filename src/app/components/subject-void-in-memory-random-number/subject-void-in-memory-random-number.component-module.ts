import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectVoidInMemoryRandomNumberComponent } from './subject-void-in-memory-random-number.component';

@NgModule({
  imports: [CommonModule ,MatButtonModule, MatIconModule],
  declarations: [SubjectVoidInMemoryRandomNumberComponent],
  providers: [],
  exports: [SubjectVoidInMemoryRandomNumberComponent]
})
export class SubjectVoidInMemoryRandomNumberComponentModule {
}
