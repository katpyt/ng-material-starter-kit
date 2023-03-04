import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, of } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-form-sort-single-products',
  styleUrls: ['./list-form-sort-single-products.component.scss'],
  templateUrl: './list-form-sort-single-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ListFormSortSingleProductsComponent {
  readonly orderDictionary: Observable<string[]> = of(['asc', 'desc']);
  readonly orderControl: FormControl = new FormControl();

  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.orderControl.valueChanges
  ]).pipe(
    map(([list, order]) => {
      if (!order) return list;

      return list.sort((a, b) => {
        return order === 'asc'
          ? a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
          : a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
      })
    })
  );

  constructor(private _productService: ProductService) {
  }
}
