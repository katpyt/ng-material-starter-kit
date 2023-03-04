import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, startWith, switchMap } from 'rxjs';
import { SlowDataService } from '../../services/slow-data.service';

interface ReuqestStateModel {
  isLoading: boolean;
  value?: string[];
  error?: HttpErrorResponse | Error
}

@Component({
  selector: 'app-query-loader-names',
  templateUrl: './query-loader-names.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class QueryLoaderNamesComponent {

  private _buttonStateSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public buttonState$: Observable<void> = this._buttonStateSubject.asObservable();

  onButtonClicked() {
    this._buttonStateSubject.next();
  }

  readonly namesList$: Observable<ReuqestStateModel> = this.buttonState$.pipe(
    switchMap(() => this._slowDataService.getName().pipe(
      map((names) => {
        return {
          isLoading: false,
          value: names
        }
      }),
      startWith({
        isLoading: true
      }),
      catchError((error) => {
        return of({
          isLoading: false,
          error: error
        })
      })
    ))
  );



  constructor(private _slowDataService: SlowDataService) {
  }
}
