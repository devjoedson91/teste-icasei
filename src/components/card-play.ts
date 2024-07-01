import { VideoProps } from "./video-item";

export function CardPlay(video: VideoProps): HTMLDivElement {
  const thumbnailsContent = document.createElement("div");
  thumbnailsContent.classList.add("thumbnails-content");
  thumbnailsContent.style.backgroundImage = `url(${video.snippet.thumbnails.medium.url})`;

  const playIcon = document.createElement("i");
  playIcon.classList.add("ph-bold");
  playIcon.classList.add("ph-play");
  thumbnailsContent.appendChild(playIcon);

  thumbnailsContent.addEventListener("click", () => {
    const link = `https://www.youtube.com/watch?v=${video.id.videoId}`;

    window.open(link, "_blank");
  });

  return thumbnailsContent;
}
