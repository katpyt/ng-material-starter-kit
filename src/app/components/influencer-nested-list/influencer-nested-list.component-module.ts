import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { InfluencerNestedListComponent } from './influencer-nested-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, MatChipsModule],
  declarations: [InfluencerNestedListComponent],
  providers: [],
  exports: [InfluencerNestedListComponent]
})
export class InfluencerNestedListComponentModule {
}
