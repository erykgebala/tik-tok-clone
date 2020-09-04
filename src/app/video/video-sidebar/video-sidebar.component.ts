import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-sidebar',
  templateUrl: './video-sidebar.component.html',
  styleUrls: ['./video-sidebar.component.scss']
})
export class VideoSidebarComponent implements OnInit {

  @Input() liked;
  @Input() comments;
  @Input() shared;

  constructor() { }

  ngOnInit() {
  }

  likeVideo() {
    this.liked++;
  }

  commentVideo() {
    this.comments++;
  }

  shareVideo() {
    this.shared++;
  }
}
