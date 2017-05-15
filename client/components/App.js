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
  }

  render() {
    if(this.props.gameRoom) {
      return <GameRoomPage {...this.props} socket={this.socket}/>;
    }
    return <JoinPage {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    joinType: state.joinType,
    gameRoom: state.gameRoom
  }
}

let mapDispatchToProps = (dispatch) => {
  return  bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
