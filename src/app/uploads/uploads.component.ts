import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { VideoService } from '../services/video.service'

import { FormGroup, FormControl } from '@angular/forms'
import { VideoFile } from '../video-file.model';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {

  videoUploadForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  })
  url:string;
  selectedFiles: FileList;
  private newVideo: VideoFile = new VideoFile();

  constructor(private uploadService: UploadService, private videoService: VideoService) { }

  ngOnInit() {
  }


  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
    this.createVideoObject(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  createVideoObject(file: File){
    let name = file.name;
    this.newVideo = new VideoFile(this.videoUploadForm.value);
    this.newVideo.url = "https://s3-S3_REGION_ID.amazonaws.com/S3_BUCKET/" + name;
    this.videoService.saveVideo(this.newVideo);

  }

  
}


