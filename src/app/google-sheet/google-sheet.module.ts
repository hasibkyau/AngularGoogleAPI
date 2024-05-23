import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleSheetRoutingModule } from './google-sheet-routing.module';
import { GoogleSheetComponent } from './google-sheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [GoogleSheetComponent],
  imports: [
    CommonModule,
    GoogleSheetRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
  ],
  exports: [GoogleSheetComponent],
})
export class GoogleSheetModule {}
