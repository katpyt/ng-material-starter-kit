import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailsComponent {
  private readonly _details$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productService.getProduct(data['id'])),
    take(1),
    tap((data: ProductModel) => this.productForm.patchValue(data))
  );
  public get details$(): Observable<ProductModel> {
    return this._details$;
  }

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
    image: new FormControl()
  });

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService, private _router: Router) {
    this.details$.subscribe();
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data) => this._productService.updateProduct({
        id: data['id'],
        ...productForm.value
      }))
    ).subscribe(() => this._router.navigate(['']));

  }
}
