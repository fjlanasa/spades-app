import React, { Component } from 'react';
import { render } from 'react-dom';

class NewGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameRoomName: Math.random().toString(36).substring(2,6),
      playerName: '',
      gameWinningScore: '500'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {gameRoomName, playerName, gameWinningScore} = this.state;
    this.props.submitGameForm({gameRoomName, playerName, gameWinningScore});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>Game Room Name</label>
          <input type='text' name='gameRoomName' value={this.state.gameRoomName} onChange={this.handleChange} required/>
        </div>
        <div>
          <label>Game Winning Score</label>
          <input type='number' name='gameWinningScore' value={this.state.gameWinningScore} onChange={this.handleChange} required/>
        </div>
        <div>
          <label>Your Name</label>
          <input type='text' name='playerName' value={this.state.playerName} onChange={this.handleChange} required/>
        </div>
        <div>
          <input type='submit' value='Create Game' />
        </div>
      </form>
    );
  };
}

export default NewGameForm;
