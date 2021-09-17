import React, { Component } from "react";
import {randomWord} from "./words";
import "./Hangman.css";
import img0 from "./images/0.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6, img7],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyzäöü".split("").map(ltr => (
      <button
        value={ltr}
        key={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  refreshPage = () => {
    window.location.reload();
 }

  render() {
    let gameWon = this.guessedWord().join("") === this.state.answer
    let gameOver = this.state.nWrong >= this.props.maxWrong
    let gameState = this.generateButtons();
    if(gameWon) gameState = "YOU WIN!";
    if(gameOver) gameState = "YOU LOSE!";
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={gameOver ? 
          (this.props.images[this.props.images.length - 1]) :
          (this.props.images[this.state.nWrong])}
          alt={`${this.state.nWrong}/${this.props.maxWrong} wrong guesses`}
        />
        <h2>Wrong Guesses: {this.state.nWrong}</h2>
        <h3>{gameOver ? this.state.answer : this.guessedWord()}</h3>
        <p className='Hangman-btns'>{gameState}</p>
        <button onClick={this.refreshPage} className="btn-restart">Restart Game</button>
      </div>
    );
  }
}

export default Hangman;
