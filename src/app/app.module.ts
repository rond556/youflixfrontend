import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UploadsComponent } from './uploads/uploads.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';



import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    UploadsComponent,
    VideoComponent,
    HomeComponent,
    HomeComponent,
    UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
