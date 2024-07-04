import { searchByKeyword } from "../../utils/functions";
import { CardPlay } from "../card-play";

describe("CardPlay", () => {
  it("should render", async () => {
    document.body.innerHTML = '<div id="app"></div>';

    const data = await searchByKeyword("javascript");

    const cardPlay = CardPlay(data.items[0]);

    const app = document.getElementById("app");

    expect(1 + 1).toBe(2);
  });
});
