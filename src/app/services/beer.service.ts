import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer.model';

@Injectable({ providedIn: 'root' })

export class BeerService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllBeersWithPagination(page: number, perPage: number): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>('https://api.punkapi.com/v2/beers?page='+page+'&per_page='+perPage);
  }
    
  getAllBeersWithPaginationDefault(): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>('https://api.punkapi.com/v2/beers?page=1&per_page=5');
  }
}
