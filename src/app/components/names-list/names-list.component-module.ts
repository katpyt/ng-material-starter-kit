import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NamesListComponent } from './names-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [NamesListComponent],
  providers: [],
  exports: [NamesListComponent]
})
export class NamesListComponentModule {
}
