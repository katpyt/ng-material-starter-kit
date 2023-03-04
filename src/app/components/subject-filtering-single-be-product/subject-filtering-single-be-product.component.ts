import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-subject-filtering-single-be-product',
  styleUrls: ['./subject-filtering-single-be-product.component.scss'],
  templateUrl: './subject-filtering-single-be-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectFilteringSingleBeProductComponent {
  readonly categoryList$: Observable<string[]> = this._productService.getAllCategories();

  private _selectedCategorySubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  public selectedCategory$: Observable<string | undefined> = this._selectedCategorySubject.asObservable();

  readonly productList$: Observable<ProductModel[]> = this.selectedCategory$.pipe(
    switchMap((data: string | undefined) => {
      if (!data) return this._productService.getAllProducts();
      return this._productService.getAllInCategory(data);
    })
  )

  constructor(private _productService: ProductService) {

  }

  onFilteringCategoryChanged(category: string): void {
    this._selectedCategorySubject.next(category);
  }
}
