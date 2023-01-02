import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-ip-tracker-container',
  templateUrl: './ip-tracker-container.component.html'
})
export class IpTrackerContainerComponent implements OnInit {

  constructor(private service: TrackerService) { }

  ngOnInit(): void {
    this.service.getApi().subscribe((res)=>{
      if(res){
        console.log(res);
      }
    })
  }

}
