import { HumanPlayer } from "./player-human";
import { ComputerPlayer } from "./player-comp";
import { Game } from "./game";
import { choices } from "./game-data";

const player1 = new HumanPlayer(1);
const player2 = new ComputerPlayer(2);

new Game(player1, player2, choices);
