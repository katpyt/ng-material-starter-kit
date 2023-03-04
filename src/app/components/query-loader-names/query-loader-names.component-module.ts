import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QueryLoaderNamesComponent } from './query-loader-names.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [QueryLoaderNamesComponent],
  providers: [],
  exports: [QueryLoaderNamesComponent]
})
export class QueryLoaderNamesComponentModule {
}
