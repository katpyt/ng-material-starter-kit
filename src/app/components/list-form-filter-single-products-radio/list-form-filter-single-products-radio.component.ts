import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-form-filter-single-products-radio',
  styleUrls: ['./list-form-filter-single-products-radio.component.scss'],
  templateUrl: './list-form-filter-single-products-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ListFormFilterSingleProductsRadioComponent {
  readonly categoryControl: FormControl = new FormControl();

  readonly categoryList$: Observable<string[]> = this._productService.getAllCategories();
  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.categoryControl.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([list, category]) => {
      if (!category) return list;

      return list.filter((product) => {
        return category ? product.category === category : true
      })
    })
  )


  constructor(private _productService: ProductService) {
  }
}
