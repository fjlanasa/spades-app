import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from 'react-select';

class JoinGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameRoomName: null,
      playerName: '',
      currentGames: []
    }
    this.populateSelect = this.populateSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.socket.emit('getGames', (games) => {
      let newState = {currentGames: games};
      this.setState({currentGames: games});
    });
  }

  populateSelect() {
    let games = this.state.currentGames.map((game, index) => {
      return (
        {
          value: game.name,
          label: game.name
        }
      );
    });
    return games;
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSelect(game) {
    if (!game) {
      return this.setState({gameRoomName: null});
    }
    this.setState({gameRoomName: game.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let {gameRoomName, playerName, gameWinningScore} = this.state;
    this.props.submitGameForm({gameRoomName, playerName, gameWinningScore});
  }

  render() {
    let options = this.populateSelect();
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>Game Room Name</label>

          <Select
            disabled={this.state.currentGames.length == 0}
            name='gameRoomName'
            onChange={this.handleSelect}
            placeholder='Select Game'
            options={options}
            value={this.state.gameRoomName}
          />
        </div>
        <div>
          <label>Your Name</label>
          <input type='text' name='playerName' value={this.state.playerName} onChange={this.handleChange} required/>
        </div>
        <div>
          <input type='submit' value='Join Game' />
        </div>
      </form>
    );
  };
}

export default JoinGameForm;
