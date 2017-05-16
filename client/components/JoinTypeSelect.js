import React, { Component } from 'react';
import { render } from 'react-dom';

class JoinTypeSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setJoinType(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor='new-game'>Start a New Game</label>
        <input type='radio' name='join-type' value='new-game' id='new-game' onChange={this.handleChange}/>
        <label htmlFor='join-game'>Join a Game</label>
        <input type='radio' name='join-type' value='join-game' id='join-game' onChange={this.handleChange}/>
      </div>
    );
  };
}

export default JoinTypeSelect;
