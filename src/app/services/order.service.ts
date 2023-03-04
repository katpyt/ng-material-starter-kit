import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CityModel, CountryModel, OrderModel, OrderProductModel } from '../models/order.model';

@Injectable({ providedIn: 'root' })

export class OrderService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<OrderProductModel[]> {
    return this._httpClient.get<OrderProductModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products').pipe(
      map(data => data.sort((product1: OrderProductModel, product2: OrderProductModel) => {
        if(product1.name < product2.name) return -1;
        if(product1.name > product2.name) return 1;
        return 0;
      }))
    );
  }

  getAllCities(): Observable<CityModel[]> {
    return this._httpClient.get<CityModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cities').pipe(
      map(data => data.sort((city1: CityModel, city2: CityModel) => {
        if(city1.name < city2.name) return -1;
        if(city1.name > city2.name) return 1;
        return 0;
      }))
    );
  }

  getAllCountries(): Observable<CountryModel[]> {
    return this._httpClient.get<CountryModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/countries').pipe(
      map(data => data.sort((country1: CountryModel, country2: CountryModel) => {
        if(country1.name < country2.name) return -1;
        if(country1.name > country2.name) return 1;
        return 0;
      }))
    );
  }

  createOrder(order: OrderModel): Observable<OrderModel> {
    return this._httpClient.post<OrderModel>('https://fakestoreapi.com/users', order);
  }
}
