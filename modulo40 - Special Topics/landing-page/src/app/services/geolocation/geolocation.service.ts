import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showLocation);
      console.log(navigator.geolocation)
    }
  }

  public showLocation(position: any) {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    window.open(url, 'map')
  }
}