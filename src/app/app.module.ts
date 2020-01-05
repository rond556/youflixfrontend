import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';



import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UploadService } from './services/upload.service';
import { UploadsComponent } from './uploads/uploads.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    UploadsComponent,
    VideoComponent,
    HomeComponent,
    HomeComponent,
    UserComponent
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
