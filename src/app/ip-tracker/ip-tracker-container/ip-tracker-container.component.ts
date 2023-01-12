import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-ip-tracker-container',
  templateUrl: './ip-tracker-container.component.html'
})
export class IpTrackerContainerComponent implements OnInit {

  public coordinates$: Observable<any>;

  constructor(private service: TrackerService) {
    this.coordinates$ = new Observable();
  }

  ngOnInit(): void {
  }

  public getIpaddress(value: any) {
    this.coordinates$ = this.service.getCoordinates(value);
  }
}
