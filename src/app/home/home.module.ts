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
import { DiscordCommunityComponent } from './components/discord-community/discord-community.component';
import { YoutubeChannelComponent } from './components/youtube-channel/youtube-channel.component';


@NgModule({
  declarations: [HomeComponent, MainIllustrationComponent, SearchVideosComponent, YoutubeVideoComponent, MainContentComponent, DiscordCommunityComponent, YoutubeChannelComponent],
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
