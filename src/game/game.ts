import { Player } from "./player";
import { winDict } from "./game-data";

export class Game {
    readonly roundCount: number;
    private winner: Player | null;
    private loser: Player | null;
    private p1: Player;
    private p2: Player;
    private choices: string[];

    constructor(
        player1: Player,
        player2: Player,
        choices: string[]
    ) {
        const readRoundCount = prompt("Best of how many?");
        if (readRoundCount) {
            if (+readRoundCount % 2 === 0) {
                this.roundCount = +readRoundCount + 1;
                console.log(
                    "Round count must be odd or there could be a tie, silly!"
                );
            } else {
                this.roundCount = +readRoundCount;
            }
        } else {
            this.roundCount = 3;
        }
        this.p1 = player1;
        this.p2 = player2;
        this.winner = null;
        this.loser = null;
        this.choices = choices;
        this.playGame();
    }

    startGame() {
        console.log(
            `Best of ${
                this.roundCount
            } between ${this.p1.getName()} and ${this.p2.getName()}. Go!`
        );
    }

    playGame() {
        this.startGame();
        while (!this.winner) {
            this.playRound();
        }
        this.endGame();
    }

    playRound() {
        const p1Choice = this.p1.makeChoice(this.choices);
        const p2Choice = this.p2.makeChoice(this.choices);
        console.log(
            `${this.p1.getName()} threw ${p1Choice}! ${this.p2.getName()} threw ${p2Choice}!`
        );
        if (winDict[p1Choice] === p2Choice) {
            this.p1.addWin();
        } else if (winDict[p2Choice] === p1Choice) {
            this.p2.addWin();
        } else {
            console.log("A tie!");
            return;
        }

        if (this.p1.getWins() === Math.ceil(this.roundCount / 2)) {
            this.winner = this.p1;
            this.loser = this.p2;
            return;
        } else if (this.p2.getWins() === Math.ceil(this.roundCount / 2)) {
            this.winner = this.p2;
            this.loser = this.p1;
            return;
        }
        this.showGameState();
    }

    showGameState() {
        console.log(
            `${this.p1.getName()} has ${this.p1.getWins()}, ${this.p2.getName()} has ${this.p2.getWins()}`
        );
    }

    endGame() {
        console.log(
            `${this.winner?.getName()} won ${this.winner!.getWins()} to ${this.loser!.getWins()}!`
        );
    }
}
