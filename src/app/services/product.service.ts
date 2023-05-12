import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOp: any;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:4500/products", this.httpOp);
  }

  getProducts2(pattern: string): Observable<any> {
    return this.http.get("http://localhost:4500/660/products?type=" + pattern, this.httpOp);
  }

  postProduct(product: any): Observable<any> {
    this.httpOp=new HttpHeaders({
      'Content-Type':'application.json',
    })
    return this.http.post("http://localhost:4500/products", product, this.httpOp);
  }
  httpOptions(arg0:string,obj:any,httpOptions:any): Observable<any>{
    throw new Error ('Method not implemented.');
  }
}
