import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsshowingComponentComponent } from './detailsshowing-component/detailsshowing-component.component';
import { MainUIComponentComponent } from './main-uicomponent/main-uicomponent.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'mainpage'
},

  
{
  path:'mainpage',
  component:MainUIComponentComponent,
},

{
  path:'detailspage',
  component:DetailsshowingComponentComponent,
},

{
  path:'signuppage',
  component:SignupComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
