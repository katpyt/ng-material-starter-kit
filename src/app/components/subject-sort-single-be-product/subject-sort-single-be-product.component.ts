import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, of, shareReplay, take } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-subject-sort-single-be-product',
  styleUrls: ['./subject-sort-single-be-product.component.scss'],
  templateUrl: './subject-sort-single-be-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectSortSingleBeProductComponent {

  readonly sortDirectionDict$ = of(['asc', 'desc']);

  private _selectedSortDirectionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('desc');
  public selectedSortDirection$: Observable<string> = this._selectedSortDirectionSubject.asObservable().pipe(shareReplay(1));

  public sortDirections$: Observable<string> = combineLatest([
    this.sortDirectionDict$,
    this._selectedSortDirectionSubject
  ]).pipe(
    map(([list, selectedDirection]) => {
      return list.filter((item) => item !== selectedDirection)[0]
    })
  );

  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.selectedSortDirection$,
  ]).pipe(
    switchMap(
      ([list, selectedSortDirection]) => {
        if (selectedSortDirection) return this._productService.getAllProductsSorted(selectedSortDirection);
        return of(list);
    })
  );

  constructor(private _productService: ProductService) {
    
  }

  onSortingDirectionChanged(sortValue: string): void {
    sortValue = sortValue === 'asc' ? 'desc' : 'asc';
    this._selectedSortDirectionSubject.next(sortValue);
    // console.log('sortValue [' + sortValue + ']');
  }
}
