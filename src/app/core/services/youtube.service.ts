import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { YoutubeVideo } from '../models/youtube-video';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private url = `https://www.googleapis.com/youtube/v3/search`;

  constructor(private http: HttpClient) {}

  seachVideoFromQuery(query: String): Observable<YoutubeVideo[]> {
    return this.http
      .get<YoutubeVideo[]>(
        `${this.url}?q=${query}&channelId=UCbx_d228PdYwgB4Jz202SIQ&part=snippet,id&order=date&maxResults=10&key=${environment.googleAPIKey}`
      )
      .pipe(tap(response => console.log(response)),map((response: any) => response.items), tap(response => console.log(response)));
  }
}
