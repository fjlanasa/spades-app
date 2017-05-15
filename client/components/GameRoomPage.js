import React, { Component } from 'react';
import { render } from 'react-dom';

class GameRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.socket.emit('join', this.props.gameRoom, (roomFull) => {
      if (roomFull) {
        console.log('room is full');
        this.props.setGameRoom(null);
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
