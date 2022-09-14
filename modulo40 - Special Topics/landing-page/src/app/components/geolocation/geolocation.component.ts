import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {

  constructor(
    private geolocationService: GeolocationService
  ) { }

  ngOnInit(): void {
    this.getGeolocation();
  }

  public getGeolocation() {
    this.geolocationService.getLocation()
  }

}
