import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { VideoFile } from 'src/app/video-file.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videoURL: string;

  constructor(private http: HttpClient) {
    this.videoURL = 'http://localhost:8080/videos';
   }

   public findAllVideos(): Observable<VideoFile[]>{
     return this.http.get<VideoFile[]>(this.videoURL);
   }

   public saveVideo(video: VideoFile) {
     return this.http.post<VideoFile>(this.videoURL, video)
   }
}
