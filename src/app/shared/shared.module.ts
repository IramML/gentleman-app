import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { YoutubeSanitizerPipe } from './pipes/youtube-sanitizer.pipe';



@NgModule({
  declarations: [ToolbarComponent, YoutubeSanitizerPipe],
  exports: [ToolbarComponent, YoutubeSanitizerPipe],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
  ]
})
export class SharedModule { }
