import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { UploadsComponent } from './uploads/uploads.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'video', component: VideoComponent },
  { path: 'uploads', component: UploadsComponent },
  { path: 'home', component: HomeComponent},
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
