import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubjectStringExternalSnackbarProductComponent } from './subject-string-external-snackbar-product.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, MatSnackBarModule, MatSnackBarModule],
  declarations: [SubjectStringExternalSnackbarProductComponent],
  providers: [],
  exports: [SubjectStringExternalSnackbarProductComponent]
})
export class SubjectStringExternalSnackbarProductComponentModule {
}
