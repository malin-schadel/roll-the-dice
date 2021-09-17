import './App.css';
import RollDice from './RollDice';
import FlipCoin from './FlipCoin';
import Hangman from './Hangman';


function App() {
  return (
    <div className='App'>
      <h1>Roll The Dice!</h1>
      <RollDice/>
      <h1>Flip The Coin!</h1>
      <FlipCoin/>
      <h1>Hangman</h1>
      <Hangman/>
    </div>
  );
}

export default App;
