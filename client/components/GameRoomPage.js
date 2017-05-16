import React, { Component } from 'react';
import { render } from 'react-dom';

class GameRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.socket.emit('join',
    {
      game: this.props.gameRoom,
      playerName: this.props.playerName,
      winningScore: this.props.winningScore
    }, (roomFull) => {
      if (roomFull) {
        this.props.submitGameForm({gameRoomName: null, playerName: null, gameWinningScore: null});
      }
    });
    this.props.socket.on('newMessage', function(message) {
      console.log(message);
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.gameRoom}</h1>
      </div>
    );
  };
}

export default GameRoomPage;
