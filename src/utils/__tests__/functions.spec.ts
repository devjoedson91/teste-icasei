import { VideoProps } from "../../components/video-item";
<<<<<<< Updated upstream
import { searchByKeyword, updateListVideos } from "../functions";

document.body.innerHTML = `
  <div id="app">
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
  </div>
`;
=======
import { searchByKeyword } from "../functions";
import { screen } from "@testing-library/dom";

const fn = jest.fn(searchByKeyword);
>>>>>>> Stashed changes

describe("functions tests", () => {
  it("searchByKeyword should be called with a string param", () => {
    fn("javascript");

    expect(typeof fn.mock.calls[0][0]).toBe("string");
  });

<<<<<<< Updated upstream
  it("updateListVideos should be called with a list array param", () => {
    const fn = jest.fn(updateListVideos);

    const list: VideoProps[] = [
      {
        id: {
          videoId: "lkIFF4maKMU",
        },
        snippet: {
          title: "100+ JavaScript Concepts you Need to Know",
          thumbnails: {
            medium: {
              url: "https://i.ytimg.com/vi/lkIFF4maKMU/mqdefault.jpg",
            },
          },
        },
      },
    ];

    fn(list);

    expect(typeof fn.mock.calls[0][0]).toBe("object");
=======
  it("searchByKeyword should return a promise", async () => {
    expect(searchByKeyword("javascript")).toBeInstanceOf(Promise);

    const data = await fn("javascript");

    expect(data).toBe({});
>>>>>>> Stashed changes
  });
});
