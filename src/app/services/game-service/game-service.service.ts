import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private API_SERVER = 'http://localhost:8020/videogame';
  constructor(
    private httpClient: HttpClient
  ) { }
  getAllGame():Observable<any>{
    return this.httpClient.get(this.API_SERVER+'/all');
  }
  saveGame(game:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+'/save/',game);
  }
  updateGame(gameId:string  | null,gameData:any):Observable<any>{
    return this.httpClient.put(this.API_SERVER+'/update/'+gameId,gameData);
  }
}
