import React, { Component } from 'react';
import { render } from 'react-dom';
import JoinTypeSelect from './JoinTypeSelect';
import JoinGameForm from './JoinGameForm';
import NewGameForm from './NewGameForm';

class JoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let joinForm;

    if(this.props.joinType == 'new-game') {
      joinForm = <NewGameForm {...this.props}/>;
    } else if (this.props.joinType == 'join-game') {
      joinForm = <JoinGameForm {...this.props}/>;
    }

    return (
      <div>
        <JoinTypeSelect {...this.props}/>
        {joinForm}
      </div>
    );
  };
}

export default JoinPage;
