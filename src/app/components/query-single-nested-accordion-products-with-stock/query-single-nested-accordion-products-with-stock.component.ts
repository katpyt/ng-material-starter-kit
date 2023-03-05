import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, elementAt, forkJoin, map, Observable, reduce, switchMap } from 'rxjs';
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

  readonly product$: Observable<ProductWithStockQueryModel[]> = this._snackBarService.getAll().pipe(
    switchMap((products) =>
      forkJoin(products.map((product) =>
        this._snackBarService.getProductMetadata(product.id)
      )).pipe(
        map((stocks: SnackBarMetadataModel[][]) =>
          products.map((element, index) => {
            return {
              productName: element.name,
              productPrice: element.price,
              stockValue: stocks[index][0].stock
            }
          })
        )
      )
    )
  );

  constructor(private _snackBarService: SnackBarService) {
  }


}
