import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CountryModel } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-subject-void-external-delete-country',
  styleUrls: ['./subject-void-external-delete-country.component.scss'],
  templateUrl: './subject-void-external-delete-country.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectVoidExternalDeleteCountryComponent {
  private _countriesSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public countries$: Observable<CountryModel[]> = this._countriesSubject.asObservable().pipe(switchMap(() => this._countryService.getAllCountries()));
  
  constructor(private _countryService: CountryService) {

  }

  onRemoveButtonClicked(countryId: string) {
    this._countryService.deleteCountry(countryId).subscribe(
      () => this._countriesSubject.next()
    )
  }

}
