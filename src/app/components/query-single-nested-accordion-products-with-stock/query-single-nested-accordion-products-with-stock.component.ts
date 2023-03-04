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
  // readonly product$: Observable<ProductWithStockQueryModel[]> = this._snackBarService.getAll().pipe(
  //   map((products) =>

  //     products.map(product => {
  //       const productStock: SnackBarMetadataModel = this._snackBarService.getProductMetadata(product.id).pipe(
  //         map((metaData) => {
  //           return metaData.reduce(
  //             (a: SnackBarMetadataModel, b: SnackBarMetadataModel) => ({ ...a, [b.stock]: a.stock + b.stock })
  //           )
  //         })
  //       );


  //       return {
  //         productName: product.name,
  //         productPrice: product.price,
  //         stockValue: productStock['stock']
  //       }
  //     }))
  // );

  constructor(private _snackBarService: SnackBarService) {
  }


}
