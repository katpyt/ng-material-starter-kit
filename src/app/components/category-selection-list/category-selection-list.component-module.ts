import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategorySelectionListComponent } from './category-selection-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategorySelectionListComponent],
  providers: [],
  exports: [CategorySelectionListComponent]
})
export class CategorySelectionListComponentModule {
}
