import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DietPlan } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  uploadImage(formData: FormData) {
    throw new Error('Method not implemented.');
  }

  httpOp:any;

  constructor(private http:HttpClient) { }

  getServices():Observable<any> {
     return this.http.get("http://localhost:4500/services");
  }

  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/details/"+id)
  }

  getServiceById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/services/"+id)
  }

  postDietPlan(dietPlan: any):Observable<any>{
    this.httpOp=new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this.http.post("http://localhost:4500/services", dietPlan, { headers: this.httpOp });
  }
}
