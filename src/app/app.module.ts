import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GoogleSheetModule } from './google-sheet/google-sheet.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthAdminInterceptor } from './auth-interceptor/auth-admin.interceptor';

@NgModule({
  declarations: [AppComponent, GooglemapComponent],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    GoogleMapsModule,
    GoogleSheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
