import { PlayerNumber } from "../model/player";

interface IProps {
    playerNumber: PlayerNumber;
    headSrc: string;
    handSrc: string;
}

export default function Robot({ playerNumber, headSrc, handSrc }: IProps) {
    const flipClass = playerNumber === PlayerNumber.Player1 ? "" : "flip-x";

    const head = (
        <img
            src={headSrc}
            className={flipClass}
            height="200px"
            alt={`robot-${playerNumber}`}
        />
    );

    const hand = (
        <img
            src={handSrc}
            className={flipClass}
            height="100px"
            alt={`robot-${playerNumber}`}
        />
    );

    if (playerNumber === PlayerNumber.Player1) {
        return (
            <div>
                {head}
                {hand}
            </div>
        );
    } else {
        return (
            <div>
                {hand}
                {head}
            </div>
        );
    }
}
