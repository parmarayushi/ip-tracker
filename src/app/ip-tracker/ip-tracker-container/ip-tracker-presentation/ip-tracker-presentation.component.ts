import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as Leaflet from 'leaflet';
import { TrackerService } from '../../tracker.service';
import { IpTrackerPresenterService } from '../ip-tracker-presenter/ip-tracker-presenter.service';

@Component({
  selector: 'app-ip-tracker-presentation',
  templateUrl: './ip-tracker-presentation.component.html',
  viewProviders: [IpTrackerPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IpTrackerPresentationComponent implements OnInit {

  public mapIpAdress: FormGroup;
  public latitude: number = 1
  public longitude: number = 1
  private map: any;

  constructor(
    private ipTrackerPresentersrevice: IpTrackerPresenterService,
    private trackerService: TrackerService
  ) {
    this.mapIpAdress = this.ipTrackerPresentersrevice.buildForm();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    Leaflet.marker([this.latitude, this.longitude]).addTo(this.map);
  }

  public onSubmit() {
    this.trackerService.getMarker(this.mapIpAdress.value.ipAddress).subscribe(value => {
      this.latitude = value.latitude;
      this.longitude = value.longitude;
      Leaflet.marker([this.latitude, this.longitude]).addTo(this.map);
      this.map.flyTo([this.latitude, this.longitude], 15);
    })
  }
}
