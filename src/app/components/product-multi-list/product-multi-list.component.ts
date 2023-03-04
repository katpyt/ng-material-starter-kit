import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-multi-list',
  styleUrls: ['./product-multi-list.component.scss'],
  templateUrl: './product-multi-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductMultiListComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAllProducts();

  constructor(private _productService: ProductService) {
  }
}
