import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable, reduce, switchMap } from 'rxjs';
import { ProductWithStockQueryModel } from 'src/app/queries/product-with-stock.query-model';
import { OrderProductModel } from '../../models/order.model';
import { SnackBarMetadataModel } from '../../models/snack-bar-metadata.model';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-query-single-nested-accordion-products-with-stock',
  templateUrl: './query-single-nested-accordion-products-with-stock.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class QuerySingleNestedAccordionProductsWithStockComponent {
  //test
  readonly product$: Observable<ProductWithStockQueryModel[]> = this._snackBarService.getAll().pipe(
    map((products) =>

      products.map(product => {
        const stockForProductId: number = this._snackBarService.getProductMetadata(product.id)
          .pipe(
            map((data) => (
              data.reduce((a, b) => (a + b.stock), 0)
            ))
          );

        return {
          productName: product.name,
          productPrice: product.price,
          stockValue: stockForProductId
        }
      }))
  );

  constructor(private _snackBarService: SnackBarService) {
  }


}
