import { Player } from "./player";

export class HumanPlayer extends Player {
    name: string;
    constructor(playerNum: number) {
        super(playerNum);
        this.name = prompt("What's your name?") || `Player${playerNum}`;
    }

    makeChoice(choices: string[]) {
        let index = prompt(
            "What do you throw?\n1: rock\n2: paper\n3: scissors"
        );
        if (index) {
            const choice = choices[+index - 1];
            if (choice && choices.includes(choice!.toLowerCase())) {
                return choice;
            } else {
                console.log('Not a valid choice; please type "1," "2," or "3"');
                this.makeChoice(choices);
            }
        }
    }
}
