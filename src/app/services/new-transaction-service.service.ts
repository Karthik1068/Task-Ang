import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewTransactionServiceService {
  baseURL: string = "http://rest.irongates.in/MCBService/";
  
  post = "POST";
  get = "GET";

  headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });
  insertTransaction: string = "getMCBController/insertRecords";
  getTransactionList: string = "getMCBController/getRecords";

  constructor(private http: HttpClient) { }

  public getCustomerJsonData(): Observable<any> {
    return this.http.get("./assets/customers.json");
  }

  submitNewTransaction(jsonObj): Observable<any> {
    return this.http.post(this.baseURL + this.insertTransaction, jsonObj, {
      headers: this.headers
    })
  }

  getAllTransaction(): Observable<any> {
    return this.http.post(this.baseURL + this.getTransactionList, { }, {
      headers: this.headers
    })
  }
}
