import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as Leaflet from 'leaflet';
import { IpTrackerPresenterService } from '../ip-tracker-presenter/ip-tracker-presenter.service';

@Component({
  selector: 'app-ip-tracker-presentation',
  templateUrl: './ip-tracker-presentation.component.html',
  viewProviders: [IpTrackerPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IpTrackerPresentationComponent implements OnInit {

  @Input() public set locationData(value: any) {
    if (value) {
      this._locationData = value;
    }
  }

  public get locationData(): any {
    return this._locationData;
  }

  @Input() public set coordinatePoints(value: any) {
    if (value) {
      this._coordinates = value;
    }
  }

  public get coordinatePoints(): any {
    return this._coordinates;
  }

  @Output() public location: EventEmitter<any>;

  public mapIpAdress: FormGroup;
  public latitude: number = 1
  public longitude: number = 1

  private map: any;
  private _locationData: any;
  private _coordinates: any;

  constructor(private ipTrackerPresentersrevice: IpTrackerPresenterService) {
    this.mapIpAdress = this.ipTrackerPresentersrevice.buildForm();
    this.location = new EventEmitter();
  }

  ngOnInit(): void {
    this.ipTrackerPresentersrevice.getLocationData$.subscribe((res) => {
      this.location.emit(res); 
    })
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
    Leaflet.Icon.Default.prototype.options.iconUrl = './assets/images/icon-location.svg';
  }

  public onSubmit() {
    this.ipTrackerPresentersrevice.submit(this.mapIpAdress.value.ipAddress)
    if (this.coordinatePoints) {
      this.latitude = this.coordinatePoints.latitude;
      this.longitude = this.coordinatePoints.longitude;
      Leaflet.marker([this.latitude, this.longitude]).addTo(this.map);
      this.map.flyTo([this.latitude, this.longitude], 15);
    }
  }
}
