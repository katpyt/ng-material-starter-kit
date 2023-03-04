import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EditSimpleProductWithCategoryComponent } from './edit-simple-product-with-category.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule],
  declarations: [EditSimpleProductWithCategoryComponent],
  providers: [],
  exports: [EditSimpleProductWithCategoryComponent]
})
export class EditSimpleProductWithCategoryComponentModule {
}
