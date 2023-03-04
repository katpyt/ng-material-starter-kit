import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of, map, shareReplay } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-subject-sorting-single-product',
  styleUrls: ['./subject-sorting-single-product.component.scss'],
  templateUrl: './subject-sorting-single-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectSortingSingleProductComponent {

  readonly sortDirection$: Observable<string[]> = of(['asc', 'desc']);
  private _selectedSortDirectionSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>('asc');
  public selectedSortDirection$: Observable<string | undefined> = this._selectedSortDirectionSubject.asObservable().pipe();

  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.selectedSortDirection$
  ]).pipe(
    map(
      ([list, selectedSortDirection]) => {
        if (selectedSortDirection === 'desc') return list.sort((a, b) => a.price > b.price ? -1 : 1);
        return list.sort((a, b) => a.price > b.price ? 1 : -1);
        }
      )
    );

  constructor(private _productService: ProductService) {
  }

  onFilteringDirectionChanged(sortDirection: string): void {
    // console.log('sortDir: [' + sortDirection + ']');
    this._selectedSortDirectionSubject.next(sortDirection);
  }
}
