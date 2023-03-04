import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-route-sort-single-products-backend',
  styleUrls: ['./list-route-sort-single-products-backend.component.scss'],
  templateUrl: './list-route-sort-single-products-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ListRouteSortSingleProductsBackendComponent {
  readonly sortDirections$ = of(['asc', 'desc']);

  readonly queryParams$: Observable<Params> = this._activatedRoute.queryParams.pipe(
    map(queryParams => ({ sort: queryParams['sort'] }))
  );

  readonly productsList$: Observable<ProductModel[]> = this.queryParams$.pipe(
    switchMap(data => this._productService.getAllProductsSorted(
      data['sort'] ?? 'asc'))
  );

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
