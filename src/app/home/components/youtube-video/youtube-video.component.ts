import { Component, Input, OnInit } from '@angular/core';
import { YoutubeVideo } from 'src/app/core/models/youtube-video';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {
  @Input() video: YoutubeVideo;

  constructor() { }

  ngOnInit(): void {
  }

}
