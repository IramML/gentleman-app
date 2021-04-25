import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeSanitizer'
})
export class YoutubeSanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${value}`);
  }

}
