import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TrackerService {

  public apiLink:string
  public api:string

  constructor(private _http:HttpClient) { 
    this.apiLink='https://geo.ipify.org/api/v2/country?apiKey=at_4opohXUHtQd907us3fZ5sSXphDFu1&ipAddress=8.8.8.8';
    this.api = 'http://ipwho.is/'
  }

  public getApi():Observable<any>{
    return this._http.get<any>(`${this.apiLink}`);
  }

  public getMarker(ipAddress:any):Observable<any>{
    return this._http.get<any>(`${this.api}/${ipAddress}`);
  }
}
