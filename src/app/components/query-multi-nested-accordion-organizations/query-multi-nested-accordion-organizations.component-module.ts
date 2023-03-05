import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QueryMultiNestedAccordionOrganizationsComponent } from './query-multi-nested-accordion-organizations.component';

@NgModule({
  imports: [MatExpansionModule, CommonModule, MatProgressSpinnerModule],
  declarations: [QueryMultiNestedAccordionOrganizationsComponent],
  providers: [],
  exports: [QueryMultiNestedAccordionOrganizationsComponent]
})
export class QueryMultiNestedAccordionOrganizationsComponentModule {
}
