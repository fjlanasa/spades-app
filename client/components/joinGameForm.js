import React, { Component } from 'react';
import { render } from 'react-dom';

class JoinGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameRoomName: '',
      playerName: ''
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
    this.props.setGameRoom(this.state.gameRoomName);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>Game Room Name</label>
          <input type='text' name='gameRoomName' value={this.state.gameRoomName} onChange={this.handleChange}/>
        </div>
        <div>
          <label>Your Name</label>
          <input type='text' name='playerName' value={this.state.playerName} onChange={this.handleChange}/>
        </div>
        <div>
          <input type='submit' value='Join Game' />
        </div>
      </form>
    );
  };
}

export default JoinGameForm;
