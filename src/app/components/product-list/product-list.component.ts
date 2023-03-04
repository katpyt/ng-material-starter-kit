import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly categories$: Observable<string[]> = this._productService.getAllCategories();

  private _selectedLetterSubject: Subject<string>
    = new BehaviorSubject<string>('');
  public selectedLetter$: Observable<string>
    = this._selectedLetterSubject.asObservable();


  private _selectedCategorySubject: BehaviorSubject<string | undefined>
    = new BehaviorSubject<string | undefined>(undefined);
  public selectedCategory$: Observable<string | undefined>
    = this._selectedCategorySubject.asObservable();

  // readonly products$: Observable<ProductModel[]> = combineLatest([
  //   this._productService.getAll(),
  //   this.selectedCategory$,
  // ]).pipe(
  //     //delay(2000)
  //   map(([list, selectedCategory]) => {
  //     if (!selectedCategory) {
  //       return list;
  //     }
  //     return list.filter(product => product.category === selectedCategory );
  //     })
  //   );

  // readonly products$: Observable<ProductModel[]> = this.selectedCategory$.pipe(
  //   switchMap((data: string | undefined) => {
  //     if (!data) {
  //       return this._productService.getAll();
  //     }
  //     return this._productService.getAllInCategory(data)
  //   })
  // );

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.selectedCategory$,
    this.selectedLetter$
  ]).pipe(
    map(([list, selectedCategory, letter]) => {
      if (!selectedCategory) return list;
      // return list
      //   .filter(product => product.category === selectedCategory)
      //   .filter((product) => product.title.startsWith(letter || ''));
      return list.filter((product) => {
        return (
          product.category === selectedCategory || product.title.startsWith(letter)
        );
      });
    })
  );

  readonly letters$: Observable<string[]> = of(['A', 'B', 'C', 'D', 'E'])

  constructor(private _productService: ProductService, private _categoryService: CategoryService) {
  }

  onFilteringChanged(category: string): void {
    this._selectedCategorySubject.next(category);
  }

  onLetterFilteringChanged(letter: string): void {
    this._selectedLetterSubject.next(letter);
  }
}
