import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontpageComponent} from './frontpage/frontpage.component';
import {LeafletMapGeojsonComponent} from './leaflet-map-geojson/leaflet-map-geojson.component';
import {CategoriesComponent} from './categories/categories.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  {path: 'map', component: LeafletMapGeojsonComponent},
  {path: 'maps', redirectTo: '/map'},
  {path: 'cat', component: CategoriesComponent},
  {path: 'qr/:endpoi', component: QrcodeComponent},
  {path: '', component: FrontpageComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
