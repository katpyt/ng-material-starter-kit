import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { forkJoin, map, Observable, shareReplay, switchMap } from 'rxjs';
import { ProductsWithOtherFromCategoryQueryModel } from 'src/app/queries/products-with-other-from-category.query-model';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-query-single-nested-sequential-list-products-with-categories',
  templateUrl: './query-single-nested-sequential-list-products-with-categories.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class QuerySingleNestedSequentialListProductsWithCategoriesComponent {

  readonly productList$: Observable<ProductsWithOtherFromCategoryQueryModel[]> = this._productService.getAllProducts().pipe(
    switchMap((products) =>
      forkJoin(products.map((product) =>
        this._productService.getAllProductsFromCategory(product.category)
      )).pipe(
        map((otherProducts: ProductModel[][]) =>
          products.map((element, index) => {
            return {
              productName: element.title,
              productPrice: element.price,
              otherProducts: otherProducts[index].filter(product => product.title !== element.title)
            }
          })
        )
      )
    )
  );

  constructor(private _productService: ProductService) {
  }
}
