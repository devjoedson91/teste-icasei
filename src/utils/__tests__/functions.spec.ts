import { VideoProps } from "../../components/video-item";
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

describe("functions tests", () => {
  it("searchByKeyword should be called with a string param", () => {
    const fn = jest.fn(searchByKeyword);

    fn("javascript");

    expect(typeof fn.mock.calls[0][0]).toBe("string");
  });

  it("updateListVideos should be called with a list array param", () => {
    const fn = jest.fn(updateListVideos);

    document.querySelector(".mf-videos")!;
    const videoList = document.querySelector<HTMLDivElement>(".video-list")!;
    videoList.querySelectorAll(".video-item")!;

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
  });
});
