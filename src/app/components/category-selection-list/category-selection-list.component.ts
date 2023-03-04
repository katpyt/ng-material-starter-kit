import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-selection-list',
  styleUrls: ['./category-selection-list.component.scss'],
  templateUrl: './category-selection-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySelectionListComponent {
  readonly list$: Observable<CategoryModel[]> = this._categoryService.getAll()
  .pipe(
    //map(()=>[])
  );

  constructor(private _categoryService: CategoryService) {
  }
}
