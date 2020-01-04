import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {

  selectedFiles: FileList;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}


