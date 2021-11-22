import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'initial', component: InitialScreenComponent },
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
