import React, { Component } from 'react';
import { render } from 'react-dom';
import JoinTypeSelect from './JoinTypeSelect';
import JoinGameForm from './JoinGameForm';
import NewGameForm from './NewGameForm';

class JoinPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let joinForm;

    if(this.props.joinType == 'new-game') {
      joinForm = <NewGameForm {...this.props}/>;
    } else if (this.props.joinType == 'join-game') {
      joinForm = <JoinGameForm {...this.props} socket={this.props.socket}/>;
    }

    return (
      <div>
        <h1>Join a Game</h1>
        <JoinTypeSelect {...this.props}/>
        {joinForm}
      </div>
    );
  };
}

export default JoinPage;
