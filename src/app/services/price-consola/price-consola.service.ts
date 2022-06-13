import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PriceConsolaService {
private API_SERVER ='http://localhost:8020/priceperconsole';
  constructor(
    private httpClient:HttpClient
  ) { }
  savePriceConsola(data:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+'/save/',data)
  }
  getAllPriceConsola():Observable<any>{
    return this.httpClient.get(this.API_SERVER+'/all');
  }
}
