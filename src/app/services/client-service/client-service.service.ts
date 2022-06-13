import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
 private API_SERVER = 'http://localhost:8020/person';
  constructor(
    private httpClient: HttpClient
  ) { }
  public getAllClient():Observable<any>{
    return this.httpClient.get(this.API_SERVER+'/all');
  }
  public saveClient(client:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+'/save/',client);
  }
  public updateClient(clientId:string | null,clientData:any):Observable<any>{
    return this.httpClient.put(this.API_SERVER+'/update/'+clientId,clientData)
  }
}
