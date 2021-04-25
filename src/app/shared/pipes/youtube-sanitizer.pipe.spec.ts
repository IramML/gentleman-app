import { YoutubeSanitizerPipe } from './youtube-sanitizer.pipe';

describe('YoutubeSanitizerPipe', () => {
  it('create an instance', () => {
    const pipe = new YoutubeSanitizerPipe();
    expect(pipe).toBeTruthy();
  });
});
