import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfluencerNestedTreeComponent } from './influencer-nested-tree.component';

@NgModule({
  imports: [MatTreeModule, CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  declarations: [InfluencerNestedTreeComponent],
  providers: [],
  exports: [InfluencerNestedTreeComponent]
})
export class InfluencerNestedTreeComponentModule {
}
