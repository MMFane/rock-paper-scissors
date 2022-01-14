import "./css/App.css";
import "./view/ComputerPlayerView";
import "./game/game-play";
import ComputerPlayerView from "./view/ComputerPlayerView";
import { PlayerNumber } from "./model/player";

function App() {
    return (
        <div className="App">
            <p>Rock, Paper, Scissors</p>
            <div id="play-area">
                <ComputerPlayerView playerNumber={PlayerNumber.Player1} />
                <ComputerPlayerView playerNumber={PlayerNumber.Player2} />
            </div>
        </div>
    );
}

export default App;
