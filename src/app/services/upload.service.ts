import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { VideoFile } from '../video-file.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  private newVideo: VideoFile = new VideoFile();



  constructor() { }

  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'S3_ACCESS_KEY_ID',
        secretAccessKey: 'S3_SECRET_ACCESS_KEY_ID',
        region: 'S3_REGION_ID'
      }
    );
    const params = {
      Bucket: 'S3_BUCKET',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
  
}
