import { updateListVideos } from "../utils/functions";
import {
  getFavorites,
  isFavorite,
  removeItem,
  saveFavorite,
} from "../utils/storage";
import { VideoProps } from "./video-item";

export function counterFavs(
  element: HTMLButtonElement,
  starIcon: HTMLElement,
  video: VideoProps
) {
  const counter = document.querySelector<HTMLHeadingElement>(".counter")!;

  const favorites = getFavorites("@myvideos");

  let count = favorites.length;

  const setCounter = () => {
    const videoFavorite = isFavorite(video);

    if (videoFavorite) {
      const remove = removeItem(video.id.videoId);
      starIcon.style.color = "#fff";
      count = remove.length;

      if (window.location.pathname !== "/") {
        updateListVideos(remove);
      }
    } else {
      const add = saveFavorite("@myvideos", video);
      starIcon.style.color = "#f88b0c";
      count = add.length;
    }

    counter.innerHTML = `(${count})`;
  };

  element.addEventListener("click", () => setCounter());
}
