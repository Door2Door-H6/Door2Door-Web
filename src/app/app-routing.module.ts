import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeafletMapComponent} from './leaflet-map/leaflet-map.component';
import {FrontpageComponent} from './frontpage/frontpage.component';

const routes: Routes = [
  {path: 'map', component: LeafletMapComponent},
  {path: '', component: FrontpageComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
