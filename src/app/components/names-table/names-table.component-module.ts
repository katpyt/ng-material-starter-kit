import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NamesTableComponent } from './names-table.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [NamesTableComponent],
  providers: [],
  exports: [NamesTableComponent]
})
export class NamesTableComponentModule {
}
