import { searchByKeyword } from "../functions";

describe("functions tests", () => {
  it("searchByKeyword should be called with a string param", () => {
    const fn = jest.fn(searchByKeyword);

    fn("javascript");

    expect(typeof fn.mock.calls[0][0]).toBe("string");
  });
});
