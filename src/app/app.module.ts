import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { CanvasMapComponent } from './canvas-map/canvas-map.component';
import { CategorysComponent } from './categorys/categorys.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

// import {} from '@angular/material'
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { QRCodeModule } from "angularx-qrcode";


@NgModule({
  declarations: [
    AppComponent,
    TabsContainerComponent,
    CanvasMapComponent,
    CategorysComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
