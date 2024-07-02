import { getFavorites } from "../utils/storage";

export function MFDrawer(): string {
  const favorites = getFavorites("@myvideos");

  const mfDrawer = `
    <aside class="mf-drawer">
        <h1>MF Drawer</h1>
        <ul>
            <li>
              <i class="ph-bold ph-youtube-logo"></i>
              <a class="videos-anchor">Videos</a>
            </li>
            
            <li>
                <div class="link-videos">
                    <i class="ph-bold ph-heart"></i>
                    <a class="favs-anchor">Favoritos</a>
                </div>
                <h2>${
                  favorites.length > 0 ? "(" + favorites.length + ")" : ""
                }</h2>
            </li>
        </ul>
    </aside>`;

  return mfDrawer;
}
