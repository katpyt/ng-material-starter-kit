import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { CatFactModel } from '../../models/cat-fact.model';
import { CatFactService } from '../../services/cat-fact.service';

@Component({
  selector: 'app-subject-void-external-random-cat-fact',
  styleUrls: ['./subject-void-external-random-cat-fact.component.scss'],
  templateUrl: './subject-void-external-random-cat-fact.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectVoidExternalRandomCatFactComponent {
  //readonly catFact$: Observable<CatFactModel> = this._catFactService.getFact();
  private _refreshCatFact$: BehaviorSubject<void> =  new BehaviorSubject<void>(void 0);
  public catFact$: Observable<CatFactModel> = this._refreshCatFact$
    .asObservable().pipe(switchMap(() => this._catFactService.getFact()));

  constructor(private _catFactService: CatFactService) {
    this._refreshCatFact$.next();
  }

  onNextButtonClicked(){
    this._refreshCatFact$.next();
  }
}
