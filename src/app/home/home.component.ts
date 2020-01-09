import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoService } from '../services/video.service';
import { VideoFile } from '../video-file.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: VideoFile[];

  constructor(private http: HttpClient, private videoService: VideoService) { }

  ngOnInit() {this.videoService.findAllVideos()
              .subscribe(result =>
                 this.videos = result)
  }

  storeVideoData(awsUrl: string, videoTitle: string, videoDescription: string){
    this.videoService.setAwsUrl(awsUrl);
    this.videoService.setVideoTitle(videoTitle);
    this.videoService.setVideoDescription(videoDescription);
  }


}
