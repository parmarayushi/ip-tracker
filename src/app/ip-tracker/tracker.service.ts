import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TrackerService {

  public apiLink:string
  public api:string

  constructor(private _http:HttpClient) { 
    this.api = 'https://ipwho.is/'
  }

  public getLocation(ipAddress:any):Observable<any>{
    return this._http.get<any>(`${this.api}/${ipAddress}`);
  }

  public getCoordinates(ipAddress:any):Observable<any>{
    return this._http.get<any>(`${this.api}/${ipAddress}`);
  }
}
