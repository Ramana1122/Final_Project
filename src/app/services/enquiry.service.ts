import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  httpOptions: any;

  constructor(private http: HttpClient) {
   
  }

  postEnquiry(obj: any): Observable<any> {
    return this.http.post("http://localhost:4500/enquiries", obj, this.httpOptions);
  }

  getEnquiry(): Observable<any> {
    return this.http.get("http://localhost:4500/enquiries");
  }
  getEnquiryId(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/enquiries/"+id)
  }
  postEnquiry2(obj: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post("http://localhost:4500/responses",obj, this.httpOptions);
  }
  getResponseId(commonid:number):Observable<any>{
    return this.http.get("http://localhost:4500/responses/"+commonid);
  }
}
