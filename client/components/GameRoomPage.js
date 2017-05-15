import React, { Component } from 'react';
import { render } from 'react-dom';

class GameRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
