import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TrackerService {

  public apiLink:string
  public api:string

  constructor(private _http:HttpClient) { 
    // this.apiLink='https://geo.ipify.org/api/v2/country?apiKey=at_4opohXUHtQd907us3fZ5sSXphDFu1&ipAddress';
    this.api = 'https://ipwho.is/'
  }

  public getLocation(ipAddress:any):Observable<any>{
    return this._http.get<any>(`${this.api}/${ipAddress}`);
  }

  public getCoordinates(ipAddress:any):Observable<any>{
    return this._http.get<any>(`${this.api}/${ipAddress}`);
  }
}
