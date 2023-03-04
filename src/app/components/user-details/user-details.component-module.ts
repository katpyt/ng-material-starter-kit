import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatCardModule],
  declarations: [UserDetailsComponent],
  providers: [],
  exports: [UserDetailsComponent]
})
export class UserDetailsComponentModule {
}
