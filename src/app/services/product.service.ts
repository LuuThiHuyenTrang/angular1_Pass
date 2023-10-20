import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }
  getOneProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  removeProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.API_URL}/${product.id}`, product);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API_URL, product);
  }
}
