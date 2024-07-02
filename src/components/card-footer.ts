import {
  getFavorites,
  isFavorite,
  removeItem,
  saveFavorite,
} from "../utils/storage";
import { VideoProps } from "./video-item";

export function CardFooter(video: VideoProps): HTMLDivElement {
  const cardFooter = document.createElement("div");
  const title = document.createElement("h1");
  const btnIcon = document.createElement("button");
  const starIcon = document.createElement("i");

  cardFooter.classList.add("card-footer");

  title.innerHTML = video.snippet.title;

  starIcon.classList.add("ph-bold");
  starIcon.classList.add("ph-star");

  const favorites = getFavorites("@myvideos") as VideoProps[];

  favorites.forEach((favorite) => {
    if (favorite.id.videoId === video.id.videoId) {
      starIcon.style.color = "#F88B0C";
    }
  });

  btnIcon.appendChild(starIcon);

  function handleFavoriteVideo() {
    const videoFavorite = isFavorite(video);

    if (videoFavorite) {
      removeItem(video.id.videoId);
      starIcon.style.color = "#fff";
    } else {
      saveFavorite("@myvideos", video);
      starIcon.style.color = "#F88B0C";
    }
  }

  btnIcon.addEventListener("click", handleFavoriteVideo);

  cardFooter.appendChild(title);
  cardFooter.appendChild(btnIcon);

  return cardFooter;
}
