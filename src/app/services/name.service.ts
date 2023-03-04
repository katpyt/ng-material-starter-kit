import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NameModel } from '../models/name.model';

@Injectable({ providedIn: 'root' })
export class NameService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<NameModel[]> {
    return this._httpClient.get<NameModel[]>('assets/names.json')
  }
}
