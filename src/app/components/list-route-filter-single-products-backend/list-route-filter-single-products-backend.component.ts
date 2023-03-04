import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, map, Observable, shareReplay, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-route-filter-single-products-backend',
  styleUrls: ['./list-route-filter-single-products-backend.component.scss'],
  templateUrl: './list-route-filter-single-products-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListRouteFilterSingleProductsBackendComponent {
  readonly categoriesList$: Observable<string[]> = this._productService.getAllCategories();

  public productsList$: Observable<ProductModel[]> = this._activatedRoute.params.pipe(
    switchMap((data) => {
      return data['category'] ? this._productService.getAllInCategory(data['category']) : this._productService.getAllProducts()
    })
  );

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router, private _location: Location) {
  }

  onCategorySelect(category: string) {
    this._router.navigate(['list-2-route-filter-single-products-backend', category]);
  }
}
