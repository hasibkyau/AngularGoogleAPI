import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss'],
})
export class GooglemapComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  // Set the initial address
  initialAddress = 'Dhaka, BD';

  // Initialize the geocoder
  geocoder = new google.maps.Geocoder();
  // Function to perform geocoding
  geocodeAddress() {
    this.geocoder.geocode(
      { address: this.initialAddress },
      (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          const location = results[0].geometry.location;
          this.center = { lat: location.lat(), lng: location.lng() };
        } else {
          console.error(
            'Geocode was not successful for the following reason:',
            status
          );
        }
      }
    );
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 90,
  };
  zoom = 8;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
