import React, { Component } from 'react';
import { render } from 'react-dom';

class NewGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameRoomName: '',
      playerName: '',
      gameWinningScore: ''
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
        <div className='form-group'>
          <label className='sr-only'>Game Room Name</label>
          <input
            type='text'
            className='form-control input-lg'
            name='gameRoomName'
            placeholder='Game Room Name'
            value={this.state.gameRoomName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label className='sr-only'>Game Winning Score</label>
          <input
            type='number'
            className='form-control input-lg'
            name='gameWinningScore'
            placeholder='What are you playing to?'
            value={this.state.gameWinningScore}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label className='sr-only'>Your Name</label>
          <input
            type='text'
            className='form-control input-lg'
            name='playerName'
            placeholder='Your Name'
            value={this.state.playerName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <input
            className='btn btn-lg'
            type='submit'
            value='Create Game'
          />
        </div>
      </form>
    );
  };
}

export default NewGameForm;
