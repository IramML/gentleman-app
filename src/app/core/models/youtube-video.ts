export interface YoutubeVideo {
  id: YoutubeVideoID;
  snippet: YoutubeVideoSnippet;
}

interface YoutubeVideoID {
  videoId: string;
  kind: YoutubeVideoKind;
}

interface YoutubeVideoSnippet {
  title: string;
  description: string;
}

export enum YoutubeVideoKind {
  video = "youtube#video",
  playlist = "youtube#playlist"
}