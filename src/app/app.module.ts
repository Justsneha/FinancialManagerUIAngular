import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainUIComponentComponent } from './main-uicomponent/main-uicomponent.component';
import { DetailsshowingComponentComponent } from './detailsshowing-component/detailsshowing-component.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceLogicService } from './service-logic.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainUIComponentComponent,
    DetailsshowingComponentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [ServiceLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
