import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of, map } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-subject-sorting-single-users',
  styleUrls: ['./subject-sorting-single-users.component.scss'],
  templateUrl: './subject-sorting-single-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectSortingSingleUsersComponent {

  readonly sortValues$: Observable<string[]> = of(['asc', 'desc']);

  private _selectedSortingSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  public selectedSorting$: Observable<string | undefined> = this._selectedSortingSubject.asObservable();

  readonly userList$: Observable<UserModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this.selectedSorting$
  ]).pipe(
    map(
      ([list, sortDir]) => {
        if (!sortDir) return list;
        return list.sort((a, b) => {
          if (sortDir === 'asc') return a.email?.toLowerCase() > b.email?.toLowerCase() ? 1 : -1;
          if (sortDir === 'desc') return a.email?.toLowerCase() > b.email?.toLowerCase() ? -1 : 1;
          return 0
        })
      })
    );

  constructor(private _userService: UserService) {
  }

  onSortingChanged(sortValue: string): void {
    this._selectedSortingSubject.next(sortValue);
  }
}
