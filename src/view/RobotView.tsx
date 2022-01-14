import headReady from "../art/robot/head-ready.png";
import handReady from "../art/robot/hand-ready.png";
import { PlayerNumber } from "../model/player";

interface IProps {
    playerNumber: PlayerNumber;
}

export default function Robot({ playerNumber }: IProps) {
    const flipClass = playerNumber === PlayerNumber.Player1 ? "" : "flip-x";

    const head = (
        <img
            src={headReady}
            className={flipClass}
            height="200px"
            alt={`robot-${playerNumber}`}
        />
    );

    const hand = (
        <img
            src={handReady}
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
