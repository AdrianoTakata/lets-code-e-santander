import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CardsHobbieComponent } from './cards-hobbie/cards-hobbie.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    HobbiesComponent,
    CardsHobbieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
