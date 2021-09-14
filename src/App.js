import './App.css';
import RollDice from './RollDice';
import FlipCoin from './FlipCoin';

function App() {
  return (
    <div className='App'>
      <h1>Roll The Dice!</h1>
      <RollDice/>
      <h1>Flip The Coin!</h1>
      <FlipCoin/>
    </div>
  );
}

export default App;
