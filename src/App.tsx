import "./css/App.css";
import "./view/player-comp";
import "./model/game-play";
import ComputerPlayerView from "./view/player-comp";

function App() {
    return (
        <div className="App">
            <p>Rock, Paper, Scissors</p>
            <div id="play-area">
                <ComputerPlayerView />
                <ComputerPlayerView />
            </div>
        </div>
    );
}

export default App;
