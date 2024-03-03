import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }
  api_url='http://localhost:8000/bill/';
  getData(endpoint:String): Observable<any> {
    
    return this.http.get(this.api_url+endpoint);
  }
}



  