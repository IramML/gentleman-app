import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { debounceTime, first, mergeMap, tap } from 'rxjs/operators';
import { YoutubeVideo } from 'src/app/core/models/youtube-video';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.scss'],
})
export class SearchVideosComponent implements OnInit {
  videos$: Observable<YoutubeVideo[]>;
  showIsLoading: boolean = false;
  searchVideoFormControl: FormControl = new FormControl();

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.videos$ = this.listenForVideosInput();
  }

  listenForVideosInput(): Observable<YoutubeVideo[]> {
    const firstLoad$ = environment.production 
      ? this.youtubeService.seachVideoFromQuery('').pipe(first())
      : this.youtubeService.getTestVideos().pipe(first());

    const videoInput$ = this.searchVideoFormControl.valueChanges.pipe(
      debounceTime(600),
      tap((_) => (this.showIsLoading = true)),
      mergeMap((query) => this.youtubeService.seachVideoFromQuery(query))
    );

    return merge(firstLoad$, videoInput$).pipe(
      tap((_) => (this.showIsLoading = false)),
    );
  }
}
