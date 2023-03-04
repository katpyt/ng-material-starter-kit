import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-menu',
  styleUrls: ['./category-menu.component.scss'],
  templateUrl: './category-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryMenuComponent {
  readonly list$: Observable<CategoryModel[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {
  }
}
