import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponent {
  // readonly productList$: Observable<ProductModel[]> = this._productService.getAllProducts();k

  private _refreshProductsSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  public productList$: Observable<ProductModel[]> = this._refreshProductsSubject
    .asObservable()
    .pipe(switchMap(() => this._productService.getAllProducts()));

  // private _productDetailsSubject: Subject<ProductModel> = new Subject<ProductModel>();
  // public productDetails$: Observable<ProductModel> = this._productDetailsSubject.asObservable();
  private _productDetailsSubject: Subject<string> = new Subject<string>();
  public productDetails$: Observable<ProductModel> = this._productDetailsSubject
  .asObservable()
  .pipe(switchMap(data => this._productService.getProduct(data)));

  constructor(private _productService: ProductService) {
  }

  onRemoveButtonClicked(product: ProductModel) {
    this._productService.deleteProduct(product.id).subscribe(
      () => this._refreshProductsSubject.next()
    );
  }

  onDetailsButtonClicked(product: ProductModel) {
    this._productDetailsSubject.next(product.id);
  }
  // onDetailsButtonClicked(id: string) {
  //   this._productService.getProduct(id).subscribe(
  //     () => this._productDetailsSubject.next()
  //   );
  // }
}
