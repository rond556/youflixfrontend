import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { VideoFile } from 'src/app/video-file.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videoURL: string;
  private awsUrl: string;
  private videoTitle: string;
  private videoDescription: string;

  constructor(private http: HttpClient) {
    this.videoURL = 'http://localhost:8080/videos';
   }

   public findAllVideos(): Observable<VideoFile[]>{
     return this.http.get<VideoFile[]>(this.videoURL);
   }

   public saveVideo(video: VideoFile) {
     return this.http.post<VideoFile>(this.videoURL, video)
   }

   public setAwsUrl(awsUrl: string){
     this.awsUrl=awsUrl;
   }

   public getAwsUrl(): string{
    return this.awsUrl;
  }

  public setVideoTitle(videoTitle: string){
    this.videoTitle=videoTitle;
  }

  public getVideoTitle(): string{
   return this.videoTitle;
 }

 public setVideoDescription(videoDescription: string){
  this.videoDescription=videoDescription;
}

public getVideoDescription(): string{
 return this.videoDescription;
}


}
