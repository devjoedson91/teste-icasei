import { VideoProps } from "../components/video-item";

export function getFavorites(key: string) {
  const favorites = localStorage.getItem(key);

  return JSON.parse(favorites || "[]");
}

export function saveFavorite(key: string, newItem: VideoProps) {
  let myFavorite = getFavorites(key);

  let hasItem = myFavorite.some(
    (item: VideoProps) => item.id.videoId === newItem.id.videoId
  );

  if (hasItem) {
    alert("Esse item já está salva na sua lista");
    return;
  }

  myFavorite.push(newItem);

  localStorage.setItem(key, JSON.stringify(myFavorite));

  return myFavorite;
}

export function removeItem(id: string) {
  let receipes = getFavorites("@myvideos");

  let myFavorites = receipes.filter((item: VideoProps) => {
    return item.id.videoId !== id;
  });

  localStorage.setItem("@myvideos", JSON.stringify(myFavorites));

  return myFavorites;
}

export function isFavorite(video: VideoProps) {
  let myVideos = getFavorites("@myvideos");

  const favorite = myVideos.find(
    ({ id }: VideoProps) => id.videoId === video.id.videoId
  );

  if (favorite) {
    return true;
  }

  return false;
}
