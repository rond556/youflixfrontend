import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { UploadsComponent } from './uploads/uploads.component';



const routes: Routes = [ 
  { path: '', redirectTo: '/video', pathMatch: 'full' },
  { path: 'video', component: VideoComponent },
  { path: 'uploads', component: UploadsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
