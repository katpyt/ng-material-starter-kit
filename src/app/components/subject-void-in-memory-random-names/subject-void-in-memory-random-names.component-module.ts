import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectVoidInMemoryRandomNamesComponent } from './subject-void-in-memory-random-names.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [SubjectVoidInMemoryRandomNamesComponent],
  providers: [],
  exports: [SubjectVoidInMemoryRandomNamesComponent]
})
export class SubjectVoidInMemoryRandomNamesComponentModule {
}
