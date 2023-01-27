import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details-product',
  styleUrls: ['./details-product.component.scss'],
  templateUrl: './details-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailsProductComponent {
  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params.pipe(switchMap(data => this._productService.getProduct(data['id'])));

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
