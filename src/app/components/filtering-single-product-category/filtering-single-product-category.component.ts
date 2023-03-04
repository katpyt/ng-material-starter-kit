import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filtering-single-product-category',
  styleUrls: ['./filtering-single-product-category.component.scss'],
  templateUrl: './filtering-single-product-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteringSingleProductCategoryComponent {

  readonly categoriesList$: Observable<string[]> = this._productService.getAllCategories();

  private _selectedCategorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedCategory$: Observable<string> = this._selectedCategorySubject.asObservable();

  readonly productsList$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.selectedCategory$]).pipe(
      map(
        ([list, selectedCategory]) => {
          if (!selectedCategory) return list;
          return list.filter((product) => {
            return (
              product.category === selectedCategory
            )
          })
        }
      )
    );

  constructor(private _productService: ProductService) {
  }

  onFilteringCategoryChange(category: string): void {
    this._selectedCategorySubject.next(category);
  }
}
