import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props){
    super(props);
    this.state = {die1: 'one', die2: 'one'}
    this.genRandom = this.genRandom.bind(this);
  };

  genRandom() {
    // generate two random values
    const newDie1 = this.props.sides[(Math.floor(Math.random() * 6))];
    const newDie2 = this.props.sides[(Math.floor(Math.random() * 6))];
    // set state for die1 and die2
    this.setState({die1: newDie1, die2: newDie2})
  }
  
  render() {
    return(
    <div className='RollDice'>
      <div className='dice'>
        <Die face={this.state.die1}/>
        <Die face={this.state.die2}/>
      </div>
      <button onClick={this.genRandom} className='btn-roll'>Roll Dice</button>
    </div>
    );
  };
}

export default RollDice;
