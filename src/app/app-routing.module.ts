import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadsComponent } from './uploads/uploads.component';
import { VideoComponent} from './video/video.component';



const routes: Routes = [  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
