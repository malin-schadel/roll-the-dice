import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    return(
      <div className='Coin'>
        <i className={(this.props.flipping) ? `fas fa-circle flip` : `${this.props.face}`} />
      </div>
    );
  }
}

export default Coin;
