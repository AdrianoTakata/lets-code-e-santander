import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent, canActivate: [AuthGuard]},
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
