import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api : string = 'http://localhost:3000/products'
  constructor(private http : HttpClient) { }
  getProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.api);
  }
  getProductsById( id : number ) : Observable<IProduct> {
    return this.http.get<IProduct>(`${this.api}/${id}`);
  }
  addProducts(product : IProduct) : Observable<IProduct> {
    return this.http.post<IProduct>(this.api , product);
  }
  updateProducts(product : IProduct) : Observable<IProduct> {
    return this.http.put<IProduct>(`${this.api}/${product.id}` , product);
  }
  deleteProducts( id : number) : Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
