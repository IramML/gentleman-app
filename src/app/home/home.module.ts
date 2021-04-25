import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainIllustrationComponent } from './components/main-illustration/main-illustration.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { SearchVideosComponent } from './containers/search-videos/search-videos.component';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [HomeComponent, MainIllustrationComponent, SearchVideosComponent, YoutubeVideoComponent, MainContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
