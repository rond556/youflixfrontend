import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { VideoFile } from '../video-file.model';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private newVideo: VideoFile = new VideoFile();



  constructor(private https: HttpClient) { }

  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'https://localhost:8080/youflixapplication/addvideo', data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.https.request(newRequest);
  }
}