import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list-refresh-data-lastexcercise',
  styleUrls: ['./product-list-refresh-data-lastexcercise.component.scss'],
  templateUrl: './product-list-refresh-data-lastexcercise.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListRefreshDataLastexcerciseComponent {
  private _productListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public productList$: Observable<ProductModel[]> = this._productListSubject.asObservable().pipe(switchMap(() => this._productService.getAllProducts()));
  
  private _productTitleSubject: Subject<string> = new ReplaySubject<string>();
  public productTitle$: Observable<string> = this._productTitleSubject.asObservable();

  constructor(private _productService: ProductService) {
  }

  onRemoveButtonClicked(id: string) {
    this._productService.deleteProduct(id).subscribe(
      () => this._productListSubject.next()
    );
  }

  onDetailsButtonClicked(title: string) {
    this._productTitleSubject.next(title);
  }
}
