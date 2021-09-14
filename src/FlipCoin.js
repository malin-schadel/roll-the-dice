import React, { Component } from 'react';
import './FlipCoin.css';
import Coin from './Coin';

class FlipCoin extends Component {
  static defaultProps = {
    sides: ['fab fa-bitcoin', 'fas fa-user-circle']
  }

  constructor(props){
    super(props)
    this.state = {coin: 'fab fa-bitcoin', flipping: false}
    this.flip = this.flip.bind(this)
  }

  flip() {
    // generate a random value
    const coin = this.props.sides[(Math.floor(Math.random() * 2))]
    // set state for coin
    this.setState({coin: coin, flipping: true})
    // wait two seconds, then set flipping to false
    setTimeout(() => (
      this.setState({flipping: false})
    ), 2000)
  }

  render() {
    return(
      <div>
        <Coin face={this.state.coin} flipping={this.state.flipping}/>
        <button className='btn-flip' onClick={this.flip} disabled={this.state.flipping}>
          {this.state.flipping ? 'Flipping' : 'Flip Coin'}
        </button>
      </div>
    )
  }
}

export default FlipCoin;
