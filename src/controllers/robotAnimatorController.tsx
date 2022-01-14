import React from "react";
import Robot from "../view/RobotView";
import { PlayerNumber } from "../model/player";

import headReady from "../art/robot/head-ready.png";
import headPlay from "../art/robot/head-play.png";
import headWin from "../art/robot/head-win.png";
import handReady from "../art/robot/hand-ready.png";
import handPlay from "../art/robot/hand-play.png";
import handRock from "../art/robot/hand-rock.png";

interface IProps {
    playerNumber: PlayerNumber;
}

export default function RobotAnimatorController({ playerNumber }: IProps) {
    const heads: string[] = [headReady, headPlay, headWin];
    const hands: string[] = [handReady, handPlay, handRock];
    
    const [currentArtIndex, incrIndex] = React.useState(0);
    const [activeHead, changeHead] = React.useState(heads[currentArtIndex]);
    const [activeHand, changeHand] = React.useState(hands[currentArtIndex]);


    function incrementCurrArtIndex () {
        let newIndex = currentArtIndex + 1;
        if (newIndex >= heads.length) {
            newIndex = 0;
        }
        incrIndex( newIndex );
    }

    return (
        <div
            onClick={() => {
                incrementCurrArtIndex();
                changeHead(heads[currentArtIndex]);
                changeHand(hands[currentArtIndex]);
            }}
        >
            <Robot
                playerNumber={playerNumber}
                headSrc={activeHead}
                handSrc={activeHand}
            />
        </div>
    );
}
