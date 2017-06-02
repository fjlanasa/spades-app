import React, { Component } from 'react';
import { render } from 'react-dom';
import WaitingForPlayersStage from './WaitingForPlayersStage';
import SetTeamsStage from './SetTeamsStage';

class GameRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.renderStage = this.renderStage.bind(this);
  }

  renderStage() {
    switch(this.props.gameStatus) {
      case 'pending':
        return <WaitingForPlayersStage {...this.props} />
      case 'set-teams':
        return <SetTeamsStage {...this.props} />
      default:
        return null;
    }
  }

  componentWillMount() {
    let { gameRoomName, playerName, winningScore } = this.props;
    this.props.socket.emit('join',
      { gameRoomName, playerName, winningScore}, (game) => {
        if (!game) {
          this.props.resetGameInfo();
        }
    });
  }

  render() {
    let stage = this.renderStage();
    return(
      <div>
        { stage }
      </div>
    );
  };
}

export default GameRoomPage;
