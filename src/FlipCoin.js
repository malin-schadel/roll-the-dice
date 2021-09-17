import React, { Component } from 'react';
import './FlipCoin.css';
import Coin from './Coin';
import {randomChoice} from "./helpers";

class FlipCoin extends Component {
  static defaultProps = {
    sides: ['fab fa-bitcoin', 'fas fa-user-circle']
  }

  constructor(props){
    super(props)
    this.state = {coin: 'fab fa-bitcoin',
                  numFlips: 0,
                  numHeads: 0,
                  numTails: 0,
                  flipping: false
                }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const coin = randomChoice(this.props.sides)
    this.setState({coin: coin, flipping: true})
    setTimeout(() => (
      this.setState({flipping: false})
    ), 2000)
  }

  incrementCounter() {
    this.setState(st => {
      return {
        numFlips: st.numFlips + 1,
        numHeads: st.numHeads + (st.coin === 'fab fa-bitcoin' ? 0 : 1),
        numTails: st.numTails + (st.coin === 'fab fa-bitcoin' ? 1 : 0)
      }
    })
  }
  
  handleClick(e) {
    this.flipCoin();
    this.incrementCounter();
  }

  render() {
    return(
      <div className="FlipCoin">
        <Coin face={this.state.coin} flipping={this.state.flipping}/>
        <button className='btn-flip' onClick={this.handleClick} disabled={this.state.flipping}>
          {this.state.flipping ? 'Flipping' : 'Flip Coin'}
        </button>
        <p>{this.state.numFlips} Flips: {this.state.numHeads} x Heads and {this.state.numTails} x Tails</p>
      </div>
    )
  }
}

export default FlipCoin;
