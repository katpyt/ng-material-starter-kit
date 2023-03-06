import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, concatMap, forkJoin, from, map, Observable, scan, shareReplay, switchMap, tap } from 'rxjs';
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

  // readonly list: BehaviorSubject<ProductsWithOtherFromCategoryQueryModel[]> = new BehaviorSubject<ProductsWithOtherFromCategoryQueryModel[]>([]);
  // readonly list$: Observable<ProductsWithOtherFromCategoryQueryModel[]> = this.list.asObservable();

  // of() - tablica, tworzy obserwację
  // from() - jesli przekazemay tablicę elementów i potem pipe, to nie mamy dostepu do wszystkich produktów, tylko do pojedynczego
  readonly productList$: Observable<ProductsWithOtherFromCategoryQueryModel[]> = this._productService.getAllProducts()
    .pipe(
      switchMap((products) => from(products)
        .pipe(
          concatMap(product => this._productService.getAllProductsFromCategory(product.category)
            .pipe(
              map((otherProducts) =>
              ({
                productName: product.title,
                productPrice: product.price,
                otherProducts: otherProducts.filter(otherProducts => otherProducts.title !== product.title)
              })
              ),
            )
          ),
          // tap(product => this.list.next([...this.list.getValue(), product])) // razem z subjectami
          scan((acc, curr) => [...acc, curr], [] as ProductsWithOtherFromCategoryQueryModel[]) //bez subjecta
        ))
    );

  // readonly productList$: Observable<ProductsWithOtherFromCategoryQueryModel[]> = this._productService.getAllProducts().pipe(
  //   switchMap((products) =>
  //     forkJoin(products.map((product) =>
  //       this._productService.getAllProductsFromCategory(product.category)
  //     )).pipe(
  //       map((otherProducts: ProductModel[][]) =>
  //         products.map((element, index) => {
  //           return {
  //             productName: element.title,
  //             productPrice: element.price,
  //             otherProducts: otherProducts[index].filter(product => product.title !== element.title)
  //           }
  //         })
  //       )
  //     )
  //   )
  // );

  constructor(private _productService: ProductService) {
  }
}
