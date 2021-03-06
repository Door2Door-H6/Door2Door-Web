import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeafletMapComponent} from './leaflet-map/leaflet-map.component';
import {FrontpageComponent} from './frontpage/frontpage.component';
import {LeafletMapGeojsonComponent} from './leaflet-map-geojson/leaflet-map-geojson.component';

const routes: Routes = [
  {path: 'map', component: LeafletMapGeojsonComponent},
  {path: 'map_old', component: LeafletMapComponent},
  {path: 'maps', redirectTo: '/map'},
  {path: '', component: FrontpageComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
