export class Player {
    protected name: string;
    protected wins: number;

    constructor(playerNum: number) {
        this.name = `Player${playerNum}`;
        this.wins = 0;
    }

    getName() {
        return this.name;
    }

    getWins() {
        return this.wins;
    }

    addWin() {
        this.wins++;
    }

    makeChoice(choices: string[]): any {
        return choices[0];
    }
}

