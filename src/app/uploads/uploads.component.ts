import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

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

  constructor(private uploadService: UploadService) { }

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
    this.newVideo.url = "https://s3-us-east-1.amazonaws.com/zcw-group-videos/" + name;
    console.log(this.newVideo);
  }

  uploadVideoObjectToHeroku(newVideo: VideoFile){

  }

  
}


