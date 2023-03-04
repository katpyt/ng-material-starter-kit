import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product-with-upload',
  styleUrls: ['./edit-product-with-upload.component.scss'],
  templateUrl: './edit-product-with-upload.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class EditProductWithUploadComponent {
  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productService.getProduct(data['id'])),
    take(1),
    tap((product) => this.productForm.patchValue(product))
  );

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
  });
  readonly categoriesList$: Observable<string[]> = this._productService.getAllCategories();

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    this.productForm.get('category')?.setValue(this.productDetails$.pipe(map((data: ProductModel) => data['category'])))
  }

  onProductFormSubmitted(productForm: FormGroup): void {
  }
}
