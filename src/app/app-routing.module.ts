import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { GoogleSheetComponent } from './google-sheet/google-sheet.component';

const routes: Routes = [
  { path: '', component: GoogleSheetComponent },
  { path: 'google-map', component: GooglemapComponent },
  { path: 'google-sheet', component: GoogleSheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
