import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  styleUrls: ['./add-product.component.scss'],
  templateUrl: './add-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });

  readonly categoryList$: Observable<string[]> = this._productService.getAllCategories();

  constructor(private _productService: ProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    if (!productForm.valid) {
      return;
    }
    this._productService.create({
      title: productForm.get('title')?.value,
      price: productForm.get('price')?.value,
      image: productForm.get('image')?.value,
      description: productForm.get('description')?.value,
      category: productForm.get('category')?.value
    })
      // .create(productForm.value)
      .subscribe();


  }
}
