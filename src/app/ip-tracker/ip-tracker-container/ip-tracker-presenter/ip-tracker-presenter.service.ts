import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class IpTrackerPresenterService {
  private getLocationData: Subject<any>;
  public getLocationData$: Observable<any>;

  constructor(private _fb: FormBuilder) {
    this.getLocationData = new Subject();
    this.getLocationData$ = new Observable();

    this.getLocationData$ = this.getLocationData.asObservable();
  }

  public buildForm() {
    return this._fb.group({
      ipAddress: ['']
    });
  }

  public submit(value: any) {
    this.getLocationData.next(value);
  }
}
