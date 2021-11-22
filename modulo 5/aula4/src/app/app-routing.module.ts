import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamastorComponent } from './adamastor/adamastor.component';
import { CaruburuComponent } from './caruburu/caruburu.component';

const routes: Routes = [
  { path: 'caruburu/:id', component:  CaruburuComponent },
  { path: 'adamastor', component: AdamastorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
