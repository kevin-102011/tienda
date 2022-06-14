import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private API_SERVER ='http://localhost:8020/invoice';
  constructor(
    private httpClient:HttpClient
  ) { }
  saveInvoice(personId:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+'/save',personId)
  }
  saveRentGame(rent:any):Observable<any>{
    return this.httpClient.post('http://localhost:8020/rental/save/',rent)
  }
  getInvoiceById(invoiceId:string  | null):Observable<any>{
    return this.httpClient.get(this.API_SERVER+'/'+invoiceId)
  }
}
