import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';

const routes: Routes = [{ path: '', component: GooglemapComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
