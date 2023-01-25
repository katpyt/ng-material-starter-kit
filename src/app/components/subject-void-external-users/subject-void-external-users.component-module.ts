import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubjectVoidExternalUsersComponent } from './subject-void-external-users.component';

@NgModule({
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  declarations: [SubjectVoidExternalUsersComponent],
  providers: [],
  exports: [SubjectVoidExternalUsersComponent]
})
export class SubjectVoidExternalUsersComponentModule {
}
