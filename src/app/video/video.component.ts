import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  url: string;
  title: string;
  description: string;

  constructor(private videoService: VideoService) {
   }

  ngOnInit() {
    this.url = this.videoService.getAwsUrl();
    this.title = this.videoService.getVideoTitle();
    this.description = this.videoService.getVideoDescription();
  }

}
