import { Product } from './product-create/product.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products"

  constructor(private snacKBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snacKBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }
}
