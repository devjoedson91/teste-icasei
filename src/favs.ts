import { MFDrawer } from "./components/mf-drawer";
import { VideoItem, VideoProps } from "./components/video-item";
import { getFavorites } from "./utils/storage";
import { AnchorProps } from "./main";
import { SheetDrawer } from "./components/sheet-drawer";
import { EmptyList } from "./components/empty-list";

const mfDrawer = MFDrawer();
const favorites = getFavorites("@myvideos");
const sheetDrawer = SheetDrawer();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${mfDrawer}
  <main class="mf-videos"> 
    <header>
      <h1>Favoritos</h1>
      <button class="btn-drawer-menu">
        <i class="ph ph-list"></i>
      </button>
    </header>
    <div class="video-list"></div>
  </main>
  ${sheetDrawer}
`;

const mainContainer = document.querySelector(".mf-videos")!;
const videoList = document.querySelector<HTMLDivElement>(".video-list")!;
const videosAnchor =
  document.querySelector<HTMLAnchorElement>(".videos-anchor")!;
const videosAnchorDrawer = document.querySelector<HTMLAnchorElement>(
  ".sheet-drawer-content .videos-anchor"
)!;
const favsAnchor = document.querySelector<AnchorProps>(".favs-anchor")!;
const favsAnchorDrawer = document.querySelector<AnchorProps>(
  ".sheet-drawer-content .favs-anchor"
)!;
const btnDrawerMenu =
  document.querySelector<HTMLButtonElement>(".btn-drawer-menu")!;
const drawer = document.querySelector<HTMLDivElement>(".sheet-drawer")!;

// DRAWER MENU EXIBITION CONTROL

function handleOpenDrawerMenu() {
  drawer.style.display = "flex";
}

function handleCloseDrawerMenu(event: Event) {
  if (event.target === drawer) {
    drawer.style.display = "none";
  }
}

btnDrawerMenu.addEventListener("click", handleOpenDrawerMenu);
drawer.addEventListener("click", handleCloseDrawerMenu);

if (!favorites.length) {
  videoList.remove();

  const emptyList = EmptyList("Sua lista de favoritos está vazia");

  mainContainer.appendChild(emptyList);
} else {
  favorites.forEach((video: VideoProps) => {
    const videoItem = VideoItem(video);
    videoList.appendChild(videoItem);
  });
}

// ROUTES CONTROL

function handleNavigation() {
  window.location.href = "/";
}

videosAnchor.addEventListener("click", handleNavigation);
videosAnchorDrawer.addEventListener("click", handleNavigation);

favsAnchor.style.color = "#f88b0c";
favsAnchorDrawer.style.color = "#f88b0c";
