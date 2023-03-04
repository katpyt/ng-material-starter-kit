import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, RequiredValidator, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, debounceTime, map, startWith, switchMap } from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-list-form-search-single-university-backend',
  styleUrls: ['./list-form-search-single-university-backend.component.scss'],
  templateUrl: './list-form-search-single-university-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ListFormSearchSingleUniversityBackendComponent {

  readonly countryName: FormControl<string | null> = new FormControl('', [Validators.required]);

  // NIEPOTRZEBNIE combineLatest
  // readonly universitiesList$: Observable<UniversityModel[]> = combineLatest([
  //   this.countryName.valueChanges.pipe(startWith('')),
  // ]).pipe(
  //   debounceTime(1000),
  //   switchMap(([country]) => {
  //     if (!country) return [];
  //     return this._universityService.getAllUniversitiesByCountry(country)
  //   })
  // );

  readonly universitiesList$: Observable<UniversityModel[]> = this.countryName.valueChanges.pipe(startWith(''))
    .pipe(
      debounceTime(1000),
      switchMap((country) => {
        if (!country) return [];
        return this._universityService.getAllUniversitiesByCountry(country)
      })
    );


  constructor(private _universityService: UniversityService) {
  }
}
