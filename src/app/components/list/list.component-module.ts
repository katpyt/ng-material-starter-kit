import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './list.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  declarations: [ListComponent],
  providers: [],
  exports: [ListComponent]
})
export class ListComponentModule {
}
