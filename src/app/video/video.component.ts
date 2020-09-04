import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('videoPlayer', {static: true}) videoPlayer: ElementRef;

  playing = false;

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    if (!this.playing) {
      this.videoPlayer.nativeElement.play();
      this.playing = true;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.playing = false;
    }

  }
}
