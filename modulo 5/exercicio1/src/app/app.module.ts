import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmaComponent } from './turma/turma.component';
import { CodersComponent } from './coders/coders.component';

@NgModule({
  declarations: [
    AppComponent,
    TurmaComponent,
    CodersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
