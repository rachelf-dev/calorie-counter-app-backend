import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Product } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/products`;

  searchProducts(search = ''): Observable<Product[]> {
    const params = search ? new HttpParams().set('search', search) : undefined;
    return this.http.get<Product[]>(this.baseUrl, { params });
  }

  getMyProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/my`);
  }

  createProduct(product: Omit<Product, '_id' | 'createdBy'>): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  deleteProduct(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`);
  }
}
