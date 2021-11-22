import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdamastorComponent } from './adamastor/adamastor.component';
import { CaruburuComponent } from './caruburu/caruburu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdamastorComponent,
    CaruburuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
