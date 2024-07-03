import { MFDrawer } from "./components/mf-drawer";
import { SheetDrawer } from "./components/sheet-drawer";
import { searchByKeyword, updateListVideos } from "./utils/functions";
export interface AnchorProps extends HTMLAnchorElement {
  style: CSSStyleDeclaration;
}

const mfDrawer = MFDrawer();
const sheetDrawer = SheetDrawer();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${mfDrawer}
  <main class="mf-videos">
    <header>
      <h1>MF Videos</h1>
      <div class="search-content">
        <input type="text" placeholder="Pesquisar" class="search-input" />
        <button class="btn-search">
          <i class="ph ph-magnifying-glass"></i>
        </button>
      </div>
      <button class="btn-drawer-menu">
        <i class="ph ph-list"></i>
      </button>
    </header>
    <div class="video-list"></div>
  </main>
  ${sheetDrawer}
`;

const searchInput = document.querySelector<HTMLInputElement>(".search-input")!;
const btnSearch = document.querySelector<HTMLButtonElement>(".btn-search")!;
const drawer = document.querySelector<HTMLDivElement>(".sheet-drawer")!;
const videosAnchor = document.querySelector<AnchorProps>(".videos-anchor")!;
const videosAnchorDrawer = document.querySelector<AnchorProps>(
  ".sheet-drawer-content .videos-anchor"
)!;
const favsAnchor = document.querySelector<AnchorProps>(".favs-anchor")!;
const favsAnchorDrawer = document.querySelector<AnchorProps>(
  ".sheet-drawer-content .favs-anchor"
)!;
const btnDrawerMenu =
  document.querySelector<HTMLButtonElement>(".btn-drawer-menu")!;

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

// CALL YOUTUBE API

async function loadVideos(keyword: string) {
  const data = await searchByKeyword(keyword || "icasei");

  updateListVideos(data.items);
}

loadVideos(searchInput.value);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    loadVideos(searchInput.value);
  }
});

btnSearch.addEventListener("click", () => loadVideos(searchInput.value));

// ROUTES CONTROL

function handleNavigation() {
  window.location.href = "/favs/index.html";
}

favsAnchor.addEventListener("click", handleNavigation);
favsAnchorDrawer.addEventListener("click", handleNavigation);

videosAnchor.style.color = "#f88b0c";
videosAnchorDrawer.style.color = "#f88b0c";
