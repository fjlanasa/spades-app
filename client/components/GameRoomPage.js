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
    let players;
    if (this.props.game) {
      players = this.props.game.players.map((player, index) => {
        return (
          <li key={`${index}`}>{player.name}</li>
        );
      });
    }
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
    this.props.socket.emit('join',
      {
        game: this.props.gameRoom,
        playerName: this.props.playerName,
        winningScore: this.props.winningScore
      }, (game) => {
        if (!game) {
          this.props.submitGameForm({gameRoomName: null, playerName: null, gameWinningScore: null});
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
