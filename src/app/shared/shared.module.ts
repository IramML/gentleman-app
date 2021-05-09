import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { YoutubeSanitizerPipe } from './pipes/youtube-sanitizer.pipe';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [ToolbarComponent, YoutubeSanitizerPipe, FooterComponent],
  exports: [ToolbarComponent, YoutubeSanitizerPipe, FooterComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
  ]
})
export class SharedModule { }
