import "./style.css";
import configs from "../src/utils/config.json" assert { type: "json" };
import { MFDrawer } from "./components/mf-drawer";
import { VideoItem, VideoProps } from "./components/video-item";
export interface AnchorProps extends HTMLAnchorElement {
  style: CSSStyleDeclaration;
}

const mfDrawer = MFDrawer();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${mfDrawer}
  <main class="mf-videos">
    <header>
      <div>
        <h1>MF Videos</h1>
        <div class="search-content">
          <input type="text" placeholder="Pesquisar" class="search-input" />
          <button class="btn-search">
            <i class="ph ph-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <button class="btn-drawer-menu">
        <i class="ph ph-list"></i>
      </button>
    </header>
    <div class="video-list"></div>
  </main>
  <div class="sheet-drawer">
    <div class="sheet-drawer-content"></div>
  </div>
`;

const videoList = document.querySelector<HTMLDivElement>(".video-list")!;
const sheetDrawer = document.querySelector<HTMLDivElement>(".sheet-drawer")!;
const searchInput = document.querySelector<HTMLInputElement>(".search-input")!;
const btnSearch = document.querySelector<HTMLButtonElement>(".btn-search")!;

const videosAnchor = document.querySelector<AnchorProps>(".videos-anchor")!;
const favsAnchor = document.querySelector<AnchorProps>(".favs-anchor")!;

const btnDrawerMenu =
  document.querySelector<HTMLButtonElement>(".btn-drawer-menu")!;

function handleOpenDrawerMenu() {
  sheetDrawer.style.display = "flex";
}

function handleCloseDrawerMenu(event: Event) {
  if (event.target === sheetDrawer) {
    sheetDrawer.style.display = "none";
  }
}

btnDrawerMenu.addEventListener("click", handleOpenDrawerMenu);
sheetDrawer.addEventListener("click", handleCloseDrawerMenu);

async function searchByKeyword(keyword: string) {
  const params: Record<string, any> = {
    part: "snippet",
    q: keyword,
    type: "video",
    maxResults: 8,
    key: configs.GOOGLE_KEY,
    fields: "items(id(videoId), snippet(title, thumbnails(medium(url))))",
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `https://www.googleapis.com/youtube/v3/search?${queryString}`;

  // try {
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error(`Erro na solicitação: ${response.statusText}`);
  //   }

  //   const data = await response.json();

  //   const videoitems = videoList.querySelectorAll(".video-item");

  //   if (videoitems.length > 0) {
  //     videoitems.forEach((item) => videoList.removeChild(item));
  //   }

  //   data.items.forEach((video: VideoProps) => {
  //     const videoItem = VideoItem(video);
  //     videoList.appendChild(videoItem);
  //   });
  // } catch (error) {}
}

!searchInput.value && searchByKeyword("icasei");

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    searchByKeyword(searchInput.value || "icasei");
  }
});

btnSearch.addEventListener("click", () =>
  searchByKeyword(searchInput.value || "icasei")
);

// ROUTES CONTROL

function handleNavigation() {
  window.location.href = "/favs";
}

favsAnchor.addEventListener("click", handleNavigation);

videosAnchor.style.color = "#f88b0c";
