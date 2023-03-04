import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-simple-product-with-category',
  styleUrls: ['./edit-simple-product-with-category.component.scss'],
  templateUrl: './edit-simple-product-with-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditSimpleProductWithCategoryComponent {
  readonly categoriesList$: Observable<string[]> = this._productService.getProductsCategories();

  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productService.getProduct(data['id'])),
    take(1),
    tap((data) => this.productForm.patchValue(data))
  );

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl()
  });


  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._activatedRoute.params.pipe(
      switchMap((data) => this._productService.updateProduct({
        id: data['id'],
        ...productForm.value
      }))
    )    
    .subscribe();
  }

  ngOnInit(): any {
    this.productForm.get('category')?.setValue(this.productDetails$.pipe(map((data: ProductModel) => data['category'])))
  }
}
