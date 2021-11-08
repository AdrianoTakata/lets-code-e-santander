import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RebimbocaComponent } from './rebimboca/rebimboca.component';
import { Rebimboca2Component } from './rebimboca2/rebimboca2.component';

@NgModule({
  declarations: [
    AppComponent,
    RebimbocaComponent,
    Rebimboca2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
