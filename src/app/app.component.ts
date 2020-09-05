import { Component } from '@angular/core';
import {VideoModel} from './video/videoModel';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tik-tok-clone';
  videos: VideoModel[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://tik-tok-clone-backend.herokuapp.com/v1/videos').subscribe((data: any) => {
      this.prepareVideos(data);
    });
  }

  private prepareVideos(data: any) {
    this.videos = [];
    this.videos = data.map(vid => {
      const video = new VideoModel();
      video.url = vid.url;
      video.liked = vid.liked;
      video.shared = vid.shared;
      video.comments = vid.comments;
      video.song = vid.song;
      video.desc = vid.desc;
      video.channel = vid.channel;
      return video;
    });
  }
}
