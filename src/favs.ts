import "./style.css";
import { MFDrawer } from "./components/mf-drawer";
import { VideoItem, VideoProps } from "./components/video-item";
import { getFavorites } from "./utils/storage";
import { AnchorProps } from "./main";

const mfDrawer = MFDrawer();
const favorites = getFavorites("@myvideos");

document.querySelector<HTMLDivElement>("#favs")!.innerHTML = `
  ${mfDrawer}
  <main class="mf-videos"> 
    <header>
      <h1>Favoritos</h1>
      <button class="btn-drawer-menu">
        <i class="ph ph-list"></i>
      </button>
    </header>
    <div class="favs-list"></div>
  </main>
  <div class="sheet-drawer">
    <div class="sheet-drawer-content"></div>
  </div>
`;

const videoList = document.querySelector<HTMLDivElement>(".favs-list")!;
const videosAnchor =
  document.querySelector<HTMLAnchorElement>(".videos-anchor")!;
const favsAnchor = document.querySelector<AnchorProps>(".favs-anchor")!;

favsAnchor.style.color = "#f88b0c";

favorites.forEach((video: VideoProps) => {
  const videoItem = VideoItem(video);
  videoList.appendChild(videoItem);
});

// ROUTES CONTROL

function handleNavigation() {
  window.location.href = "/";
}

videosAnchor.addEventListener("click", handleNavigation);
