import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { RouterModule } from '@angular/router';
import { GeocoderComponent } from './geocoder/geocoder.component';

@NgModule({
  declarations: [AppComponent, GooglemapComponent, GeocoderComponent],
  imports: [BrowserModule, GoogleMapsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
