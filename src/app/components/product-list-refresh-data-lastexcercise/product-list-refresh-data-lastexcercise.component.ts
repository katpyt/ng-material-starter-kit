import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FirstDialogComponent } from '../first-dialog/first-dialog.component';

@Component({
  selector: 'app-product-list-refresh-data-lastexcercise',
  styleUrls: ['./product-list-refresh-data-lastexcercise.component.scss'],
  templateUrl: './product-list-refresh-data-lastexcercise.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListRefreshDataLastexcerciseComponent {

  // private _dialog: MatDialog = undefined;
  private _productListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public productList$: Observable<ProductModel[]> = this._productListSubject.asObservable().pipe(switchMap(() => this._productService.getAllProducts()));
  
  private _productTitleSubject: Subject<string> = new ReplaySubject<string>();
  public productTitle$: Observable<string> = this._productTitleSubject.asObservable();

  private _productCategorySubject: Subject<string> = new Subject<string>();
  public productCategory$: Observable<ProductModel[]> = this._productCategorySubject.asObservable()
    .pipe(switchMap(x => this._productService.getAllProductsFromCategory(x)));
    // .pipe(
    // tap((product) => this._dialog.open(FirstDialogComponent, 
    //    {
    //     data.forEach(product => {
    //       product.title
    //     })
        
    //   }))
    // );

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

  onShowProductInCategoryButtonClicked(categoryName: string){
    this._productCategorySubject.next(categoryName);
  }

 }
