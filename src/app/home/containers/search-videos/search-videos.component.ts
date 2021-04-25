import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, merge, Observable } from 'rxjs';
import { debounceTime, first, map, mergeMap } from 'rxjs/operators';
import { YoutubeVideo } from 'src/app/core/models/youtube-video';
import { YoutubeService } from 'src/app/core/services/youtube.service';
@Component({
  selector: 'app-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.scss'],
})
export class SearchVideosComponent implements OnInit {
  videos$: Observable<YoutubeVideo[]>;
  searchVideoFormControl: FormControl = new FormControl();

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.videos$ = this.listenForVideosInput();
  }

  listenForVideosInput(): Observable<YoutubeVideo[]> {
    const firstLoad$ = this.youtubeService.seachVideoFromQuery('').pipe(first());
    const videoInput$ = this.searchVideoFormControl.valueChanges.pipe(
      debounceTime(600),
      mergeMap((query) => this.youtubeService.seachVideoFromQuery(query)),
    );
    return merge(/*firstLoad$, */videoInput$);
  }
}
