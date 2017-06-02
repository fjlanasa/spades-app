import React, { Component } from 'react';
import { render } from 'react-dom';
import JoinPage from './JoinPage';
import GameRoomPage from './GameRoomPage';
const io = require('socket.io-client');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = io();

    this.socket.on('setId', (id) => {
      this.props.setId(id);
    });

    this.socket.on('newMessage', (message) => {
      console.log(message);
    });

    this.socket.on('updateGame', (game) => {
      this.props.updateGame(game);
    });

    this.socket.on('rejoinGame', (rejoinInfo) => {
      let {gameRoom, playerName, gameWinningScore} = rejoinInfo;
      this.props.submitGameForm({gameRoomName: gameRoom, playerName: playerName, gameWinningScore: gameWinningScore});
    });
  }

  render() {
    if(this.props.gameRoom && this.props.playerName) {
      return <GameRoomPage {...this.props} socket={this.socket}/>;
    }
    return <JoinPage {...this.props} socket={this.socket}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    joinType: state.joinType,
    gameRoom: state.gameRoom,
    playerName: state.playerName,
    winningScore: state.winningScore,
    gameStatus: state.gameStatus,
    game: state.game,
    id: state.id
  }
}

let mapDispatchToProps = (dispatch) => {
  return  bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
