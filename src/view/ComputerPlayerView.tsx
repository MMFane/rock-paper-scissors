import { PlayerNumber } from "../model/player";
import RobotAnimatorController from "../controllers/robotAnimatorController";

interface IProps {
    playerNumber: PlayerNumber;
}

export default function ComputerPlayerView({ playerNumber }: IProps) {
    return (
        <div>
            <RobotAnimatorController playerNumber={playerNumber} />
        </div>
    );
}
