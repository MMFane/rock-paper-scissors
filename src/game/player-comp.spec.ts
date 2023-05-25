import { ComputerPlayer } from "./player-comp";
import { choices } from "./game-data";

describe("The ComputerPlayer class", () => {
  const playerNum = 1;
  const comp = new ComputerPlayer(playerNum);

  it("initilizes with a CPU player name", () => {
    const expectedName = `CPU${playerNum}`;
    expect(comp["name"]).toBe(expectedName);
  });

  it("initializes with 0 wins", () => {
    expect(comp["wins"]).toBe(0);
  });

  it("chooses a move from the provided choices array", () => {
    const choice = comp.makeChoice(choices);
    expect(choices).toContain(choice);
  });

  it("adds wins to its win count", () => {
    const winCount = comp["wins"];
    const expectedWinCount = winCount + 1;
    comp.addWin();
    expect(comp["wins"]).toBe(expectedWinCount);
  });
});
