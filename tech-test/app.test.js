import Game from "./app";
jest.mock("./app");

let game;

// make new instance of game before each test
beforeEach(() => {
    game = new Game();
});

it("does something", () => {
    const result = game;
    expect(result).toBe("");
});
