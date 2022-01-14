import { PlayerNumber } from "../model/player";
import Robot from "./RobotView";

interface IProps {
    playerNumber: PlayerNumber;
}

export default function ComputerPlayerView({ playerNumber }: IProps) {
    return (
        <div>
            <Robot playerNumber={playerNumber} />
        </div>
    );
}
