import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';


import { AppComponent } from './app.component';
import { UploadsComponent } from './uploads/uploads.component';
import { VideoComponent } from './video/video.component';

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UploadsComponent,
    VideoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
