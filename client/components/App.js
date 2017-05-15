import React, { Component } from 'react';
import { render } from 'react-dom';
import JoinPage from './JoinPage';
import GameRoomPage from './GameRoomPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);

    this.socket = io();
  }

  componentDidMount() {
    this.socket.on('connect', function() {
      console.log('connected to server');
    });
  }
  
  render() {
    if(this.props.gameRoom) {
      return <GameRoomPage {...this.props} socket={this.socket}/>;
    } else {
      return <JoinPage {...this.props} socket={this.socket}/>;
    }
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
