import logo from './logo.svg';
import './App.css';
import DrawingBoard from './drawboard';
import GuessingBoard from './guessboard';
import ChattingRoom from './chattingRoom';


function App() {
  return (
    <div class="container">
      <div class="left">
        <DrawingBoard />
        <GuessingBoard />
      </div>

      <div class="right">
        <ChattingRoom />
      </div>

    </div>
  );
}

export default App;
