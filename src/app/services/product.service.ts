import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })

export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  deleteProduct(id: string): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>('https://fakestoreapi.com/products/' + id);
  }

  getProduct(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>('https://fakestoreapi.com/products/' + id);
  }

  getAllProductsFromCategory(categoryName: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products/category/' + categoryName);
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this._httpClient.put<ProductModel>('https://fakestoreapi.com/products/' + product.id, product);
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  create(product: Omit<ProductModel, 'id'>): Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/products', product);
  }

  getAllInCategory(category: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products/category/${category}`);
  }

  getAllProductsSorted(sortValue: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products?sort=${sortValue}`);
  }


}
