import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ComputerPlayer } from "./player-comp";
import { Game } from "./game";
import { choices } from "./game-data";

// need to learn more about mocking before testing this

describe("The Game class", () => {
  // const p1 = new ComputerPlayer(1);
  // const p2 = new ComputerPlayer(2);

  // it("accepts two players and a choices array", () => {
  //   const actual = new Game(p1, p2, choices);
  //   const expectedChoices = choices;

  //   expect(actual["choices"]).toBe(expectedChoices);
  // });

  it("dummy test", () => {
    expect(true).toBe(true);
  });
});
