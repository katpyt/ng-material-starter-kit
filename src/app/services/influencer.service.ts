import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfluencerModel } from '../models/influencer.model';

@Injectable({ providedIn: 'root' })
export class InfluencerService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<InfluencerModel[]> {
    return this._httpClient.get<InfluencerModel[]>('https://6384fca14ce192ac60696c4b.mockapi.io/influecers-with-followers')
    ;
  }
}
