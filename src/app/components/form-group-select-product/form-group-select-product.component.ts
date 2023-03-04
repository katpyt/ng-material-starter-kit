import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-form-group-select-product',
  styleUrls: ['./form-group-select-product.component.scss'],
  templateUrl: './form-group-select-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupSelectProductComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
  });
  readonly categoryList$: Observable<string[]> = this._productService.getAllCategories();

  constructor(private _productService: ProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create({
      title: productForm.get('title')?.value,
      price: productForm.get('price')?.value,
      image: productForm.get('image')?.value,
      description: productForm.get('description')?.value,
      category: productForm.get('category')?.value
    }).subscribe();
  }
}
