import { CardFooter } from "./card-footer";
import { CardPlay } from "./card-play";

export interface VideoProps {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export function VideoItem(video: VideoProps): HTMLDivElement {
  const videoItem = document.createElement("div");

  videoItem.classList.add("video-item");

  const videoPlay = CardPlay(video);
  const cardFooter = CardFooter(video);

  videoItem.appendChild(videoPlay);
  videoItem.appendChild(cardFooter);

  return videoItem;
}
