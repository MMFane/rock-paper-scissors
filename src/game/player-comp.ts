import { Player } from "./player";

export class ComputerPlayer extends Player {
  constructor(playerNum: number) {
    super(playerNum);
    this.name = `CPU${playerNum}`;
  }

  makeChoice(choices: string[]) {
    const min = 0;
    const max = choices.length;
    const choiceIndex = Math.floor(Math.random() * (max - min) + min);
    return choices[choiceIndex];
  }
}
