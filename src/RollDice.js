import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props){
    super(props)
    this.state = {die1: 'one', die2: 'one', rolling: false}
    this.genRandom = this.genRandom.bind(this)
  }

  genRandom() {
    // generate two random values
    const newDie1 = this.props.sides[(Math.floor(Math.random() * 6))]
    const newDie2 = this.props.sides[(Math.floor(Math.random() * 6))]
    // set state for die1 and die2
    this.setState({die1: newDie1, die2: newDie2, rolling: true})
    // wait two seconds, then set rolling to false
    setTimeout(() => (
      this.setState({rolling: false})
    ), 2000)
  }
  
  render() {
    return(
    <div className='RollDice'>
      <div className='container'>
        <div className={`${this.state.rolling ? 'slide' : 'dice'}`}>
          <Die face={this.state.die1} rolling={this.state.rolling}/>
          <Die face={this.state.die2} rolling={this.state.rolling}/>
        </div>
      </div>
      <button className='btn-roll' onClick={this.genRandom} disabled={this.state.rolling}>
        {this.state.rolling ? 'Rolling' : 'Roll Dice'}
      </button>
    </div>
    )
  }
}

export default RollDice;
