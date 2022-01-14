const choices = ["rock", "paper", "scissors"];

const winDict: { [key: string]: string } = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
};

export { choices, winDict }
