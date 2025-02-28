import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { SnackBarModel } from '../models/snack-bar.model';
import { SnackBarMetadataModel } from '../models/snack-bar-metadata.model';

@Injectable({ providedIn: 'root' })

export class SnackBarService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<SnackBarModel[]> {
    return this._httpClient.get<SnackBarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products');
  }

  getProductMetadata(id: string): Observable<SnackBarMetadataModel[]> {
    return this._httpClient.get<SnackBarMetadataModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products/' + id + '/product-metadata');
  }

  getProductMetadataWithFork(productIds: string[]): Observable<SnackBarMetadataModel[][]> {
    return forkJoin(productIds.map(id =>
      this._httpClient.get<SnackBarMetadataModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products/' + id + '/product-metadata')
    ))
  }
}
