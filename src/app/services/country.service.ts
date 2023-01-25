import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({ providedIn: 'root' })

export class CountryService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllCountries(): Observable<CountryModel[]> {
    return this._httpClient.get<CountryModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/countries');
  }

  deleteCountry(countryId: string): Observable<CountryModel> {
    return this._httpClient.delete<CountryModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/countries/' + countryId);
  }
}
