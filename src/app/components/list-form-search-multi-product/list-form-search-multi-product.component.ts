import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { combineLatest, map, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-form-search-multi-product',
  styleUrls: ['./list-form-search-multi-product.component.scss'],
  templateUrl: './list-form-search-multi-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListFormSearchMultiProductComponent {
  constructor(private _productService: ProductService) {
  }

  readonly searchControl: FormControl = new FormControl('', [Validators.required]);

  readonly productsList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.searchControl.valueChanges
  ]).pipe(
    map(([products, keyWord]) => {
      return products.filter((product) => {
        return keyWord.length > 0 ? product.title.toLowerCase().includes(keyWord.toLowerCase()) || product.price.toString().includes(keyWord.toLowerCase()) : true
      })
    })
  );
}
