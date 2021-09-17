import { Component } from 'react';
import './App.css';
import RollDice from './RollDice';
import FlipCoin from './FlipCoin';
import Hangman from './Hangman';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { page: 'Dice' }
  }

  changePage(newPage) {
    this.setState({page: newPage})
  }

  renderPage() {
    if (this.state.page === 'Dice') return (
      <div>
        <h1>Roll The Dice!</h1>
        <RollDice/>
      </div>
    );
    else if (this.state.page === 'Coin') return (
      <div>
        <h1>Flip The Coin!</h1>
        <FlipCoin/>
      </div>
    );
    else if (this.state.page === 'Hangman') return (
      <div>
        <h1>Hangman</h1>
        <Hangman/>
      </div>
    );
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <a onClick={() => this.changePage('Dice')}>Dice <i class="fas fa-dice"></i></a>
          <a onClick={() => this.changePage('Coin')}>Coin <i class="fas fa-coins"></i></a>
          <a onClick={() => this.changePage('Hangman')}>Hangman ☻</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
